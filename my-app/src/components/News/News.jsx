import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.scss";
import { NewsItem } from "./NewsItem";
import { Alert, Container, Col } from "react-bootstrap";

export const News = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          "https://saurav.tech/NewsAPI/everything/cnn.json"
        );
        const data = response?.data;

        console.log(data); // Log the API response for debugging

        if (data && data.status === "ok" && data.articles) {
          setNews(data.articles);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    getNews();
  }, []);

  if (error) {
    return <Alert variant="danger">Failed to fetch news data</Alert>;
  }

  return (
    <Container>
      {news.length ? (
        news.map((item, index) => (
          <Col key={index}>
            <NewsItem {...item} />
          </Col>
        ))
      ) : (
        <Alert variant="primary">No News Data</Alert>
      )}
    </Container>
  );
};









