import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  MenuItem,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { UserService } from "../../service/userService";
import { RatingService } from "../../service/ratingService";
import {
  loadUsersFailure,
  loadUsersSuccess,
} from "../../redux/reducer/userReducer";
import {
  loadRatingsFailure,
  loadRatingsSuccess,
} from "../../redux/reducer/ratingReducer";

const Administration = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);
  const ratings = useSelector((state: RootState) => state.ratings.ratings);

  const [view, setView] = useState<"users" | "ratings">("users");

  const fetchUsers = () => {
    console.log("called");
    UserService.getAllUsers()
      .then((res) => {
        console.log("users loaded", res);
        dispatch(loadUsersSuccess(res));
      })
      .catch((error) => {
        dispatch(loadUsersFailure(error));
      });
  };

  const fetchRatings = () => {
    RatingService.getAllRatings()
      .then((res) => {
        dispatch(loadRatingsSuccess(res));
      })
      .catch((error) => {
        dispatch(loadRatingsFailure(error));
      });
  };

  useEffect(() => {
    fetchUsers();
    fetchRatings();
  }, []);

  console.log(users);

  const handleStatusToggle = (status: boolean, userId?: number) => {
    if (userId) {
      UserService.setUserActiveStatus(status, userId).then((r) => {
        console.log(r);
        fetchUsers();
      });
    }
  };

  const deleteRating = (id?: number) => {
    if (id) {
      RatingService.deleteRating(id).then((res) => {
        console.log(res);
        fetchRatings();
      });
    }
  };

  return (
    <Box className="p-4">
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Select
          value={view}
          onChange={(e) => setView(e.target.value as "users" | "ratings")}
          size="small"
        >
          <MenuItem value="users">Users</MenuItem>
          <MenuItem value="ratings">Ratings</MenuItem>
        </Select>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          {view === "users" ? (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>Last Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>User Type</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users?.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.firstName}</TableCell>
                    <TableCell>{user.lastName}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.userType}</TableCell>
                    <TableCell>
                      <Switch
                        checked={user.active}
                        onChange={() =>
                          handleStatusToggle(!user.active, user?.id)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          ) : (
            <>
              <TableHead>
                <TableRow>
                  <TableCell>Rate</TableCell>
                  <TableCell>Comment</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {ratings?.map((rating) => (
                  <TableRow key={rating.id}>
                    <TableCell>{rating.rate}</TableCell>
                    <TableCell>{rating.comment}</TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => deleteRating(rating.id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </>
          )}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Administration;
