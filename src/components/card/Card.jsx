import React from "react";
import {
  SimpleGrid,
  Heading,
  Text,
  Button,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Card,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CardComponent = ({ imageUrl, id }) => {
  return (
    <Card>
      <Link to={`/detail/${id}`} className="nav-link">
        <CardBody>
          <Image
            src={imageUrl}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          ></Image>
        </CardBody>
      </Link>
    </Card>
  );
};

export default CardComponent;
