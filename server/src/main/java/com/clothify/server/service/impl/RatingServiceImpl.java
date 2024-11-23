package com.clothify.server.service.impl;

import com.clothify.server.entity.Product;
import com.clothify.server.entity.Rating;
import com.clothify.server.repository.RatingRepository;
import com.clothify.server.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingServiceImpl implements RatingService {

    private final RatingRepository ratingRepository;

    @Autowired
    public RatingServiceImpl(RatingRepository ratingRepository) {
        this.ratingRepository = ratingRepository;
    }

    @Override
    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    @Override
    public void delete(long id) {
        Rating rating = ratingRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Rating not found"));

        Product product = rating.getProduct();
        if (product != null) {
            product.getRatings().remove(rating);
        }

        ratingRepository.delete(rating);
    }
}
