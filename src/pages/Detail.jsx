import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardComponent from "../components/card/Card";
import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

const Detail = () => {
  const router = useParams({});
  const URL = `http://localhost:3080/api/products/` + router.id;
  const videoUrl = `http://localhost:3080/api/videos/` + router.id;
  const commentUrl = `http://localhost:3080/api/comments/` + router.id;
  const [products, setProducts] = useState([]);
  const [video, setVideo] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(videoUrl).then((response) => {
      setVideo(response.data);
      console.log(response.data);
      console.log(video.videoUrl);
    });
  }, []);

  useEffect(() => {
    axios.get(commentUrl).then((response) => {
      setComment(response.data);
      console.log("comment" + response.data);
    });
  }, []);

  const renderCard = () => {
    return products.map((product) => (
      <>
        <Box key={product._id} w="200px">
          <CardComponent imageUrl={product.productLink} id={product._id} />
        </Box>
      </>
    ));
  };

  const renderText = () => {
    return comment.map((comment) => (
      <>
        <Box key={comment._id} w="300px">
          <h1>{comment.username}</h1>
          <h2>{comment.comment}</h2>
          <br></br>
        </Box>
      </>
    ));
  };

  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <iframe
          width="560"
          height="315"
          src={video.videoUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div>
          <h1>Comment</h1>
          {comment.length ? renderText() : null}
        </div>

        <div>
          <h1>Product</h1>
          <Flex>{products.length ? renderCard() : null}</Flex>
        </div>
      </Grid>
    </div>
  );
};

export default Detail;
