import React, { useContext } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import { IoMdEye } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import './Products.css';
import { MyContext } from '../../App';
import userImgData from '../../assets/product1.jpg';
import Pagination from '@mui/material/Pagination';


export const Products = () => {

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

    <div className="right-content productListSection">

      <div className="cardDetails shadow border-0 p-3 mt-3 d-flex justify-content-between align-items-center">
        <h4 className='mb-0 px-3'>Product List</h4>

        <Breadcrumbs aria-label="breadcrumb">
          <Link to={"/"}> <StyledBreadcrumb
            component="a"
            href="#"
            label="Home"
            icon={<HomeIcon fontSize="small" />}
          /></Link>
          <Link to={"/products"}>  <StyledBreadcrumb component="a" href="#" label="Products List" /></Link>
        </Breadcrumbs>
      </div>

      <div>
        <div className="table-responsive p-3 mt-3">
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Brand</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Rating</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#1</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />
                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#2</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />

                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#3</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#4</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#5</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#6</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#7</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>#8</td>
                <td>

                  <div className="imageInfo d-flex align-items-center">
                    <div className="img">
                      <img src={userImgData} />                    </div>
                    <div className="imgDetails">
                      <h6>Jobayed Hossain</h6>
                      <p>Lorem Ipsum is simp Lorem Ipsum is simp</p>
                    </div>

                  </div>

                </td>
                <td>Richman</td>
                <td>Fashion</td>
                <td>
                  <del className="oldPrice">$40</del>
                  <span className="newPrice">$32</span>
                </td>
                <td>30</td>
                <td>3</td>
                <td>
                  <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </td>
                <td>

                  <div className="tableActions d-flex align-items-center justify-content-center">
                    <Link to={"/productDetails"}> <Button className="secondary" color="secondary"><IoMdEye /></Button></Link>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>


        </div>

        <div className="peginationSection d-flex justify-space-between align-items-center">
        <p >show <b>12</b> of <b>20</b> result</p>
        <div className="pagination">
          <Pagination count={10} color="primary" showFirstButton showLastButton />
        </div>
      </div>
      </div>

    </div>



  )
}
