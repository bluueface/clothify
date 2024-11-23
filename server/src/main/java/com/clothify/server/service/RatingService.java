package com.clothify.server.service;

import com.clothify.server.entity.Rating;

import java.util.List;

public interface RatingService {
    List<Rating> getAllRatings();

    void delete(long id);
}
