import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import posts from "../../../data/posts.json"; //change with connection to server
import BlogItem from "../blog-item/BlogItem";
import sgMail from "@sendgrid/mail";

const BlogList = (props) => {
  const DownloadPdf = async () => {
    try {
      await fetch("http://localhost:3000/pdf/DownloadPdf", {
        headers: {
          method: "GET",
        },
      });
    } catch (error) {}
  };

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
          <Button onClick={DownloadPdf}>Download PDF</Button>
        </Col>
      ))}
    </Row>
  );
};

export default BlogList;
