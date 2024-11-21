import React, { useState } from "react";
import './index.css'
import DashBoardBox from "./components";
import { FaUserCircle } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsVertical } from "react-icons/hi";
import { Button } from "@mui/material";
import { IoTimerOutline } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Chart from "react-google-charts";
import { IoMdEye } from "react-icons/io";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Rating from '@mui/material/Rating';
import Pagination from '@mui/material/Pagination';


export const data = [
  ["Task", "Hours per Day"],
  ["sale", 10],
  ["return", 2],
  ["pending", 2],
  ["product", 8],
];

export const options = {
  "backgroundColor": "transparent",
  "chartArea": { "width": "100%", "height": "100%" },
  colors: ["red", "#eb64fe", "#2c78e5", "#f3cd29"],
  legend: { position: "right", textStyle: { color: "#ffffff", fontSize: 14 } },

};

const DashBoard = () => {

  const [showBy, setshowBy] = useState('');
  const [categoryBy, setcategoryBy] = useState('');


  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (



    <div className="right-content">

      <div>
        <div className="row">

          <div className="col-md-7">
            <div className="dashboardBoxWrapper">
              <DashBoardBox color={["#1da256", "#48d483"]} icon={FaUserCircle} userdetails="Total User" userNo="1256" grow={true} />
              <DashBoardBox color={["#c012e2", "#eb64fe"]} icon={FaCartArrowDown} userdetails="Total Order" userNo="485" />
              <DashBoardBox color={["#2c78e5", "#60aff5"]} icon={FaShoppingBag} userdetails="Total Products" userNo="98" />
              <DashBoardBox color={["#e1950e", "#f3cd29"]} icon={GiStarsStack} userdetails="Total Reviews" userNo="1456" />


            </div>
          </div>

          <div className="col-md-5">
            <div className="grophBox">
              <div className="d-flex align-items-center justify-content-between w-100">
                <h4 className="text-white mb-0 mt-0">Total Sales</h4>
                <div className="ml-auto">
                  <Button className="ml-auto toggleIcon" onClick={handleClick}> <HiDotsVertical /></Button>
                  <Menu
                    id="long-menu"
                    MenuListProps={{
                      'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: '15ch',
                        },
                      },
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <IoTimerOutline /> &nbsp; Last Day
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoTimerOutline />  &nbsp;Last Week
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoTimerOutline /> &nbsp;Last Month
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <IoTimerOutline /> &nbsp;Last Year
                    </MenuItem>

                  </Menu>
                </div>

              </div>
              <h3 className="text-white font-weight-bold">$14,526,78.00</h3>
              <p >$14,526,78.00 in last month</p>
              <br />
              <span className="chartSection"> <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height="180px"
              />
              </span>
            </div>
          </div>
        </div>


        <div className="cardDetails shadow border-0 p-3 mt-3">
          <h3 >Best Selling Product</h3>


          <div className="row cardFilter mt-3">
            <div className="col-md-3">
              <h4>Show By</h4>
              <FormControl className="w-100" size="small">
                <Select
                  value={showBy}
                  className="w-100"
                  onChange={(e) => setshowBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="col-md-3">
              <h4>Category By</h4>
              <FormControl size="small" className="w-100">
                <Select
                  value={categoryBy}
                  className="w-100"
                  onChange={(e) => setcategoryBy(e.target.value)}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
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
                      <img src="https://res.cloudinary.com/dkgonwhvj/image/upload/v1731423938/1731423936260_closwif-mens-polo-neck-solid-shirt-regular-fit-full-length-sleeve-shirt-shirt-for-mens-mens-shirt-mens-shirt-partywear-shirts-for-mens-shirts-shirts-casual-shirt-product-images-rvyj3dsm7i-0-202407121653.jpg" />
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
                    <Button className="secondary" color="secondary"><IoMdEye /></Button>
                    <Button className="success" color="success"><FaPencilAlt /></Button>
                    <Button className="error" color="error"><MdDelete /></Button>
                  </div>
                </td>
              </tr>
            </tbody>

          </table>


        </div>

      </div>

      <div className="peginationSection d-flex justify-space-between">
        <div><Pagination count={10} color="primary" showFirstButton showLastButton /></div>
      </div>
    </div>
  )
}
export default DashBoard;



