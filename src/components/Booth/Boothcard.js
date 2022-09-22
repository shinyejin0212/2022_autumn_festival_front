import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Card from '@mui/material/Card';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Boothcard.css';
import styled from 'styled-components';

import noticeExImg from '../../assets/img/noticeExImg.png';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// const boothCard = styled.section`
//   width: 100%;
//   display: flex;
//   align-items: flex-end;
//   justify-content: center;
//   border-bottom: 2px solid rgba(255, 255, 255, 0.2);
//   box-shadow: 0px 4px 4px -4px rgba(0, 0, 0, 0.25);
// `;

const Location_number = styled.p`
  font-size: 1px;
  left: 10rem;
  display: inline;
  float: left;
  margin-left: 19px;
  margin-top: 5px;
  color: #fd9903;
  font-weight: 800;
`;

const BoothLike = styled.div`
  font-size: 1px;
  float: right;
  margin-right: 17px;
`;

const BoothLikeNum = styled.div`
  font-size: 10px;
  position: absolute;
  display: inline;
  float: right;
  left: 128px;
  bottom: 68px;
`;

const JoojumBoothBorder = styled.div`
  position: absolute;
  font-size: 7px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #ff6b6b;
  //
  margin: 5px;
  color: white;
`;

const BoothBorder = styled.div`
  position: absolute;
  font-size: 7px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #0b9908;
  //
  margin: 5px;
  color: white;
`;
const FoodBorder = styled.div`
  position: absolute;
  font-size: 7px;
  border: none;
  border-radius: 2px;
  padding: 2px 5px;
  // 부스일때
  background-color: #89c3c7;
  //
  margin: 5px;
  color: white;
`;

// 부스 #0b9908
// 주점 #FF6B6B
// 받아서 다른 이름일때 디른 색깔
export default function Boothcard({
  key,
  title,
  intro,
  type,
  locationName,
  locationNum,
  likeCount,
  nowBuilding,
}) {
  return nowBuilding === locationName ? (
    <Card
      sx={{ maxWidth: 145 }}
      className="cardCss"
      style={{
        fontFamily: 'GmarketSansMedium',
        borderRadius: '10px',
        boxShadow: '2px 5px 12px 2px rgb(0, 0, 0)',
        flexDirection: 'row',
      }}
    >
      <CardActionArea>
        {/* type에 따라 다른 색 뜨게하기  */}

        {type === '주점' ? (
          <JoojumBoothBorder
            style={{
              fontFamily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </JoojumBoothBorder>
        ) : type === '부스' ? (
          <BoothBorder
            style={{
              fontFamily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </BoothBorder>
        ) : (
          <FoodBorder
            style={{
              fontFamily: 'GmarketSansMedium',
              boxShadow: '1px 1px 6px rgb(0, 0, 0)',
            }}
          >
            {type}
          </FoodBorder>
        )}

        <CardMedia
          component="img"
          height="105"
          image={noticeExImg}
          alt="부스 이미지"
        />
        <Location_number>
          <LocationOnIcon
            style={{ fontSize: '10px', position: 'absolute', left: '8px' }}
          />
          {locationName} {locationNum}번
        </Location_number>
        <BoothLike>
          <FavoriteBorderIcon sx={{ width: '10px' }} />
          <BoothLikeNum>{likeCount}</BoothLikeNum>
        </BoothLike>
        <CardContent
          style={{ marginTop: '10px', fontFamily: 'GmarketSansMedium' }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            style={{
              fontSize: '17px',
              fontFamily: 'GmarketSansMedium',
              fontWeight: '700',
            }}
          >
            {/* booth title들고오기 */}
            {title}
          </Typography>

          <Typography color="text.secondary" style={{ fontSize: '1px' }}>
            {/* booth intro 들고오기 */}
            {intro}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  ) : (
    <span></span>
  );
}
