import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { OrderService } from "../../service/orderService";
import {
  loadOrdersFailure,
  loadOrdersSuccess,
} from "../../redux/reducer/orderReducer";
import { OrderInterface } from "../../util/types";
import RateProduct from "./RateProduct";

const OrderHistory = () => {
  const dispatch = useDispatch();
  const connectedUser = useSelector(
    (state: RootState) => state.users.connectedUser,
  );
  const orders = useSelector((state: RootState) => state.orders.orders);

  const [isRatingModalOpen, setRatingModalOpen] = useState<boolean>(false);
  const [currentOrderToRate, setCurrentOrderToRate] =
    useState<OrderInterface | null>(null);

  const fetchOrders = () => {
    if (connectedUser?.id) {
      OrderService.getBuyerOrders(connectedUser.id)
        .then((res) => {
          dispatch(loadOrdersSuccess(res));
        })
        .catch((error) => {
          dispatch(loadOrdersFailure(error));
        });
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [connectedUser?.id]);

  const handleCancelOrder = async (orderId?: number) => {
    OrderService.cancelOrder(orderId!).then((res) => {
      if (res) {
        fetchOrders();
      }
    });
  };

  const handleRateOrder = (order: OrderInterface) => {
    setCurrentOrderToRate(order);
    setRatingModalOpen(true);
  };

  const renderOrder = (order: OrderInterface) => (
    <Card key={order?.id} className="shadow-sm">
      <CardContent>
        <Typography variant="h6">{`Order Number: ${order?.id}`}</Typography>
        <Typography variant="body2">{`Date: ${order?.date}`}</Typography>
        <Typography variant="body2">{`State: ${order?.orderState}`}</Typography>

        <Box className="mt-4 flex gap-2">
          {order.orderState !== "Cancelled" && (
            <Button
              variant="outlined"
              color="error"
              onClick={() => handleCancelOrder(order?.id)}
              disabled={
                order.orderState === "CANCELLED" ||
                order.orderState === "SHIPPED" ||
                order.orderState === "DELIVERED"
              }
            >
              Cancel
            </Button>
          )}
          <Button
            variant="outlined"
            color="warning"
            onClick={() => handleRateOrder(order)}
            disabled={order.orderState === "CANCELLED"}
          >
            Rate
          </Button>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box className="p-4">
      <Typography variant="h5" sx={{ marginBottom: 3 }}>
        Order History
      </Typography>
      <Box className="p-2 grid place-items-center grid-cols-3 gap-4 md:grid-cols-4">
        {orders?.length ? (
          orders.map((order) => renderOrder(order))
        ) : (
          <Typography>No orders to display.</Typography>
        )}
      </Box>
      {isRatingModalOpen && currentOrderToRate && (
        <RateProduct
          productsToRate={currentOrderToRate.products ?? []}
          isRatingModalOpen={isRatingModalOpen}
          setRatingModalOpen={setRatingModalOpen}
        />
      )}
    </Box>
  );
};

export default OrderHistory;
