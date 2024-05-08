// import React from 'react'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductRequested } from "../../redux/productAction";
import { addToCart } from "../../redux/action";

const ViewAllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const error = useSelector((state) => state.productReducer.error);

  useEffect(() => {
    // Dispatch fetchProductRequested action when component mounts
    dispatch(fetchProductRequested());
  }, [dispatch]);
  return (
    <>
      <div>
        {products ? (
          <Stack
            spacing={{ xs: 1, sm: 2 }}
            direction="row"
            useFlexGap
            flexWrap="wrap"
          >
            {products.map((product) => {
              return (
                <Card sx={{ maxWidth: 345, margin: 1 }} key={product.id}>
                  <CardMedia
                    component="img"
                    alt={product.title}
                    height="200"
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="textPrimary" component="p">
                      Price: ${product.price}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Rating
                        value={product.rating.rate}
                        precision={0.1}
                        readOnly
                      />
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        ({product.rating.count} reviews)
                      </Typography>
                    </Box>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Category: {product.category}
                    </Typography>
                    <Button variant="contained" color="primary" onClick={()=>dispatch(addToCart(product))}>
                      Buy Now
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </Stack>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default ViewAllProducts;
