import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import posts from "../../../data/posts.json"; //change with connection to server
import BlogItem from "../blog-item/BlogItem";

const BlogList = (props) => {
  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <BlogItem key={post.title} {...post} />
          <Button>Download PDF</Button>
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
