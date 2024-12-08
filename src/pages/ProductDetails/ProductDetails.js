import React, { useContext, useRef } from 'react'
import './ProductDetails.css';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Slider from "react-slick";
import productDetailsImg1 from '../../assets/thumbnail1.jpg'
import productDetailsImg2 from '../../assets/thumbnail2.jpg'
import productDetailsImg3 from '../../assets/thumbnail3.jpg'
import productDetailsImg4 from '../../assets/thumbnail4.jpg'
import productDetailsImg5 from '../../assets/thumbnail5.jpg'
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { IoIosColorPalette } from "react-icons/io";
import { SlSizeActual } from "react-icons/sl";
import { MdOutlinePriceChange } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { MdReviews } from "react-icons/md";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { UserAvatarImg, UserImg } from '../../components/UserAvatarImg/UserAvatarImg';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaReply } from "react-icons/fa";
import { MyContext } from '../../App';
import { Link } from 'react-router-dom';


export const ProductDetails = () => {

    const productSliderBig = useRef();
    const productSliderSml = useRef();
    const goToSlide = (index) => {
        productSliderBig.current.slickGoTo(index);
        productSliderSml.current.slickGoTo(index);
    }

    var productDetailsBigImg = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    var productDetailsSmallImg = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
    };

    const context = useContext(MyContext);
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {

        const isLightMode = context.themeMode; // Assuming `themeMode` is true for light mode
        const backgroundColor = isLightMode ? theme.palette.grey[100] : "#071739";
        const textColor = isLightMode ? theme.palette.text.primary : theme.palette.text.secondary;

        return {
            backgroundColor,
            height: theme.spacing(3),
            color: theme.palette.text.primary,
            fontWeight: theme.typography.fontWeightRegular,
            padding: '7px 8px',
            '&:hover, &:focus': {
                backgroundColor: emphasize(backgroundColor, 0.06),
            },
            '&:active': {
                boxShadow: theme.shadows[1],
                backgroundColor: emphasize(backgroundColor, 0.12),
            },
        };
    });





    return (
        <div>

            <div className="right-content productDetails">

                <div className="cardDetails shadow border-0 p-3 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className='mb-0 px-3'>Product View</h4>

                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to={"/"}><StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Home"
                            icon={<HomeIcon fontSize="small" />
                            }
                        /></Link>
                        <Link to={"/products"}><StyledBreadcrumb component="a" href="#" label="Products" /></Link>
                        <Link to={"/product/details"}><StyledBreadcrumb component="a" href="#" label="Products View" /></Link>



                    </Breadcrumbs>
                </div>

                <div className="productDetailsSection cardDetails shadow border-0">
                    <div className='row'>
                        <div className='col-md-5'>
                            <div className='sliderWrapper py-2 px-2'>
                                <h5 className='mb-4'>Product Gallery</h5>
                                <Slider {...productDetailsBigImg} ref={productSliderBig} className='sliderBig mb-2'>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item'>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                </Slider>

                                <Slider {...productDetailsSmallImg} ref={productSliderSml} className='sliderSmall'>
                                    <div className='item' onClick={() => goToSlide(0)}>
                                        <img src={productDetailsImg1} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(1)}>
                                        <img src={productDetailsImg2} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(2)}>
                                        <img src={productDetailsImg3} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(3)}>
                                        <img src={productDetailsImg4} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(4)}>
                                        <img src={productDetailsImg5} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(5)}>
                                        <img src={productDetailsImg5} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(6)}>
                                        <img src={productDetailsImg5} className='w-100' />
                                    </div>
                                    <div className='item' onClick={() => goToSlide(7)}>
                                        <img src={productDetailsImg5} className='w-100' />
                                    </div>
                                </Slider>
                            </div>
                        </div>

                        <div className='col-md-7'>
                            <div className='py-3 px-2'>
                                <h5 className='mb-2 '>Product Details</h5>
                                <h6>Formla suites for men slim fit 3 piece dress business party jocket</h6>


                                <div className='productInfo mt-3'>
                                    <div className='row'>

                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><MdOutlineBrandingWatermark /></span>
                                            <span className='name'>Brand</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span className='value'>Estaty</span>
                                        </div>
                                    </div>

                                    <div className='row '>
                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><MdCategory /></span>
                                            <span className='name'>Category</span>
                                        </div>
                                        <div className='col-sm-9 part2'>
                                            :<span className='value'>Man's</span>
                                        </div>

                                    </div>

                                    <div className='row'>
                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><IoIosColorPalette /></span>
                                            <span className='name'>Color</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span>
                                                <ul className='list list-inline tags'>
                                                    <li className='list-inline-item'>
                                                        <span>RED</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>BLUE</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>GREEN</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>YELLOW</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>PURPLE</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>

                                    </div>

                                    <div className='row'>
                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><FaTag /></span>
                                            <span className='name'>Tag</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span>
                                                <ul className='list list-inline tags'>
                                                    <li className='list-inline-item'>
                                                        <span>SUITS</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>DRESS</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>SMART</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>MAN</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>STYLES</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>

                                    </div>

                                    <div className='row'>
                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><SlSizeActual /></span>
                                            <span className='name'>Size</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span>
                                                <ul className='list list-inline tags'>
                                                    <li className='list-inline-item'>
                                                        <span>SM</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>MD</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>LC</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>XL</span>
                                                    </li>
                                                    <li className='list-inline-item'>
                                                        <span>XXL</span>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>

                                    </div>

                                    <div className='row'>

                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><MdOutlinePriceChange /></span>
                                            <span className='name'>Price</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span ><b>$24.00</b> <u className='text-danger' style={{ textDecoration: "none" }}>$45.00</u></span>
                                        </div>
                                    </div>

                                    <div className='row'>

                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><MdReviews /></span>
                                            <span className='name'>Stock</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span>(68) Pices</span>
                                        </div>
                                    </div>

                                    <div className='row'>

                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><AiOutlineStock /></span>
                                            <span className='name'>Review</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span>(12) Review</span>
                                        </div>
                                    </div>
                                    <div className='row'>

                                        <div className='.productDetailsSection .productInfo part1'>
                                            <span className='icon '><MdOutlinePublishedWithChanges /></span>
                                            <span className='name'>Published</span>
                                        </div>

                                        <div className='col-sm-9 part2'>
                                            :<span>11 Dec 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='px-3'>
                        <h5 className='mt-2 mb-3'>Product Decription</h5>
                        <p> ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam amet odio numquam cupiditate aliquam eius quasi voluptatum soluta minima minus, dicta saepe facilis facere cumque deserunt at ipsam eaque iure fugiat dolorem dolores repellendus. Dolore provident beatae ratione. Dignissimos optio voluptates deserunt quis harum debitis voluptatem nesciunt pariatur, culpa hic nisi rem perferendis quam esse modi sed maiores laborum aliquam! Dolores, modi iure exercitationem ipsum vitae consequuntur cum excepturi accusamus beatae assumenda sapiente facilis saepe nostrum maiores reiciendis aut iste blanditiis corporis ipsam dolorum aspernatur sint. Atque voluptatum expedita ea, labore voluptatem reiciendis quisquam nam vero aliquam dolorem error accusantium ipsum corrupti iste est officiis maxime placeat ipsam beatae quaerat itaque recusandae! Qui, harum.</p>


                        <h5 className='mt-4 mb-4'>Rating Analytics</h5>


                        <div className='ratingSection '>

                            <div className='ratingGrow d-flex align-items-center justify-content-around'>
                                <div className='col1'>
                                    5 Star
                                </div>
                                <div className='col2 mx-2'>
                                    <div class="progress" style={{ height: "30px" }}>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "85%", color: "black", fontWeight: "bold" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                                    </div>
                                </div>
                                <div className='col3'>
                                    45
                                </div>
                            </div>

                            <div className='ratingGrow d-flex align-items-center justify-content-around'>
                                <div className='col1'>
                                    4 Star
                                </div>
                                <div className='col2 mx-2'>
                                    <div class="progress" style={{ height: "30px" }}>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "74%", color: "black", fontWeight: "bold" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">74%</div>
                                    </div>
                                </div>
                                <div className='col3'>
                                    5998
                                </div>
                            </div>

                            <div className='ratingGrow d-flex align-items-center justify-content-around'>
                                <div className='col1'>
                                    3 Star
                                </div>
                                <div className='col2 mx-2'>
                                    <div class="progress" style={{ height: "30px" }}>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "69%", color: "black", fontWeight: "bold" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">69%</div>
                                    </div>
                                </div>
                                <div className='col3'>
                                    179
                                </div>
                            </div>

                            <div className='ratingGrow d-flex align-items-center justify-content-around'>
                                <div className='col1'>
                                    2 Star
                                </div>
                                <div className='col2 mx-2'>
                                    <div class="progress" style={{ height: "30px" }}>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "45%", color: "black", fontWeight: "bold" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">45%</div>
                                    </div>
                                </div>
                                <div className='col3'>
                                    09
                                </div>
                            </div>

                            <div className='ratingGrow d-flex align-items-center justify-content-around'>
                                <div className='col1'>
                                    1 Star
                                </div>
                                <div className='col2 mx-2'>
                                    <div class="progress" style={{ height: "30px" }}>
                                        <div class="progress-bar bg-warning" role="progressbar" style={{ width: "15%", color: "black", fontWeight: "bold" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">15%</div>
                                    </div>
                                </div>
                                <div className='col3'>
                                    09
                                </div>
                            </div>
                        </div>

                        <h5 className='mt-3 mb-4'>Customer Reviews</h5>

                        <div className='reviewSection'>
                            <div className='reviewRow'>

                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read " defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2 replyBtn'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>

                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>
                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>

                                <div className='row'>

                                    <div className='col-sm-10 '>
                                        <div className='d-flex align-items-center mb-1'>
                                            <div className='useInfo '>
                                                <UserAvatarImg bigImg="bl" />
                                            </div>

                                            <div className='info'>
                                                <h6>Jitendra Gupta</h6>
                                                <p>25 Minuts ago !</p>
                                            </div>
                                        </div>

                                        <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />


                                    </div>

                                    <div className='col-sm-2'>
                                        <div>
                                            <Button className='btn-blue btn-lg '> <span className='mx-2'><FaReply /></span> Reply</Button>
                                        </div>
                                    </div>
                                    <p>ipsum dolor sit amet consectetur adipisicing elit. Unde sunt numquam, quia nam, veritatis itaque suscipit possimus ipsa fuga earum ea similique delectus quos, libero dolorem dolores illum ex molestias iure vel fugit! In itaque recusandae iure tempore eum nobis rem id aperiam voluptas. Quam </p>
                                </div>

                            </div>
                        </div>

                        <h5 className='mt-4 mb-4'>Review Reply Form</h5>
                        <form className='reviewForm'>
                            <textarea placeholder='Write Here'>

                            </textarea>
                            <Button className='btn-blue btn-lg'>Drop Your Reply</Button>
                        </form>

                    </div>





                </div>

            </div>
        </div>
    )
}
