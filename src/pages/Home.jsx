import React from "react";
import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import CardComponent from "../components/card/Card";
import { Box, Flex, Spacer } from "@chakra-ui/react";

const Home = () => {
  const baseURL = "http://localhost:3080/api/videos";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setVideos(response.data);
    });
  }, []);

  const renderCard = () => {
    return videos.map((video) => (
      <>
        <Box key={video._id} w="300px">
          <CardComponent imageUrl={video.imageUrl} id={video._id} />
        </Box>
      </>
    ));
  };
  return (
    <div>
      <Layout />
      <Flex>{videos.length ? renderCard() : null}</Flex>
    </div>
  );
};

export default Home;
