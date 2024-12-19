import React, {useContext, useEffect, useState} from 'react';
import LikeListNone from "./LikeListNone";
import S from './likestyle';
import {Link, useNavigate, useParams} from "react-router-dom";
import { HeartContext } from "../../../context/heartContext";


const LikeList = () => {

    // 좋아요 리스트 heartContext에서 가져와 뿌리기4
    // 제품 좋아요
    const { state } = useContext(HeartContext);
    const { productLikes, commLikes } = state;

    // console.log(productLikes.slice(0, 1));

    const productLikeList = productLikes.map(({
       id, productName, productFilePath, productFileName, productPrice
      }, index) => {
            return (
                <S.ProductLikes key={index}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/products/${productFileName}`}
                        alt={productName}
                    />
                    <S.ProductName><p>{productName}</p></S.ProductName>
                    <S.ProductPrice><p>{productPrice}</p></S.ProductPrice>
                </S.ProductLikes>
            )
            })


    const commLikeList = commLikes.map((({
       id, imageName1, memberNickName
      }, index) => {
            return (
                <S.ProductLikes key={index}>
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/community/${imageName1}`}
                        alt={`게시물-${id + 1}`}
                    />
                    <S.ProfileInfo>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/layout/profile.png`}
                            alt="프로필"
                        />
                        <span className="UserId">{memberNickName}</span>
                    </S.ProfileInfo>
                </S.ProductLikes>
            )
        })

    )


    console.log({productLikeList})
    console.log({commLikes})
    return (
        <>
            {productLikeList.length === 0 && commLikeList.length === 0 ? (
                <LikeListNone/>
            ) : (
                <S.LikesAll>
                    <S.LikeStoreWrap>
                        <S.LikeStoreTItleWrap>
                            <S.StoreTitle>스토어</S.StoreTitle>
                            <S.OtherClickBtn>
                                <Link to={"/store"}>더 많은 상품 보러가기&#62;</Link>
                            </S.OtherClickBtn>
                        </S.LikeStoreTItleWrap>
                        <S.productLikeList>
                            {productLikeList}
                        </S.productLikeList>
                    </S.LikeStoreWrap>

                    <S.LikeCommTitleWrap>
                        <S.CommTitle>커뮤니티</S.CommTitle>
                        <S.OtherClickCommBtn>
                            <Link to={"/community"}>더 많은 게시물 보러가기&#62;</Link>
                        </S.OtherClickCommBtn>
                    </S.LikeCommTitleWrap>
                    <S.CommLikeList>
                        {commLikeList}
                    </S.CommLikeList>
                </S.LikesAll>


                )}

        </>

    );
};

export default LikeList;