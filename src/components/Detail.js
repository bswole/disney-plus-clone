import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import db from '../firebase';

function Detail() {
  ;
  const { id } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    // Grab the movie info from DB=
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          //save the movie data
          setMovie(doc.data());
        }
        else {
          // redirect to home page
        }
      })

  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt="movie poster" />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt="movie title" />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="play button" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="trailer button" />
              <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="group watch" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>
            {movie.subTitle}
          </SubTitle>
          <Description>
            {movie.description}
          </Description>
        </>
      )}
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin: 70px 0 20px;
  margin-left: -70px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.div`
  color: black;
  border-radius: 4px;
  padding: 0px 24px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  
  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  color: white;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
`

const AddButton = styled.div`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    margin-top: -8px;
    font-size: 30px;
    color: white;

  }

  &:hover{
    background-color: rgba(0, 0, 0, 0.9);
  }
`

const GroupWatchButton = styled(AddButton)`
  background: black;
  &:hover{
    background-color: rgba(0, 0, 0, 0.6);
  }
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`