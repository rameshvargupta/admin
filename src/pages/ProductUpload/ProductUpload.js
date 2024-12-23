import React, { useContext, useState } from 'react'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import './ProductUpload.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { FaCloudUploadAlt } from "react-icons/fa";


export const ProductUpload = () => {
    const context = useContext(MyContext);

    const [categoryValue, setCategoryValue] = useState('');
    const [BrandValue, setBrandValue] = useState('');

    const handleChangeCategory = (event) => {
        setCategoryValue(event.target.value);
    };
    const handleChangeBrand = (event) => {
        setBrandValue(event.target.value);
    };


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
        <div className="right-content">

            <div className="cardDetails shadow border-0 p-3 d-flex justify-content-between align-items-center">
                <h4 className='mb-0 px-3'>Product Upload</h4>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to={"/"}> <StyledBreadcrumb
                        component="a"
                        href="#"
                        label="Home"
                        icon={<HomeIcon fontSize="small" />}
                    /></Link>
                    <Link to={"/products"}> <StyledBreadcrumb component="a" href="#" label="Products" /></Link>
                    <Link to={"/product/upload"}>   <StyledBreadcrumb component="a" href="#" label="Products Upload" /></Link>
                </Breadcrumbs>
            </div>

            <div className="cardDetails shadow border-0 p-3 mt-3">
                <form className='form'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h5 className='mb-3'>Basic Information</h5>

                            <div className='form-group'>
                                <h6>PRODUCT NAME</h6>
                                <input type='text' />
                            </div>

                            <div className='form-group'>
                                <h6>DESCRIPTION</h6>
                                <textarea />
                            </div>

                            <div className='row'>
                                <div className='col  extraMarging1'>
                                    <div className='form-group'>
                                        <h6>CATEGORY</h6>
                                        <Select
                                            className='w-100 bgCategory'
                                            value={categoryValue}
                                            onChange={handleChangeCategory}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Fashion"}>Fashion</MenuItem>
                                            <MenuItem value={"Electronic"}>Electronic</MenuItem>
                                            <MenuItem value={"Footwear"}>Footwear</MenuItem>
                                            <MenuItem value={"Beauty"}>Beauty</MenuItem>
                                        </Select>
                                    </div>
                                </div>

                                <div className='col extraMarging2'>
                                    <div className='form-group'>
                                        <h6>BRAND</h6>
                                        <Select
                                            className='w-100 bgBrand'
                                            value={BrandValue}
                                            onChange={handleChangeBrand}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={"Realme"}>Realme</MenuItem>
                                            <MenuItem value={"Nokia"}>Nokia</MenuItem>
                                            <MenuItem value={"Samsung"}>Samsung</MenuItem>
                                        </Select>
                                    </div>
                                </div>

                            </div>

                            <div className='row'>
                                <div className='col extraMarging1'>
                                    <div className='form-group'>
                                        <h6>OLD PRICE</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='col extraMarging2'>
                                    <div className='form-group'>
                                        <h6>NEW PRICE</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col extraMarging1'>
                                    <div className='form-group'>
                                        <h6>PRODUCT STOCK</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='col extraMarging2'>
                                    <div className='form-group'>
                                        <h6>DISCOUNT</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col extraMarging1'>
                                    <div className='form-group'>
                                        <h6>PRODUCT SIZE</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='col extraMarging2'>
                                    <div className='form-group'>
                                        <h6>PRODUCT WEIGHT</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col extraMarging1'>
                                    <div className='form-group'>
                                        <h6>LOCATION</h6>
                                        <input type='text' />
                                    </div>
                                </div>
                                <div className='col extraMarging2'>
                                    <div className='form-group'>
                                        <h6>RATING</h6>
                                        <Rating name="half-rating" className='ratingSection' defaultValue={1} precision={0.5} />
                                    </div>
                                </div>
                            </div>





                        </div>

                        <div>
                            <Button className="btn-blue btn-lg"><span className='uploadIcon'><FaCloudUploadAlt /></span> PUBLISH & VIEW</Button>
                        </div>


                    </div>
                </form>
            </div >

            <div className="cardDetails shadow border-0 p-3 mt-3 d-flex justify-content-between align-items-center">
                <h4 className='mb-0 px-3'>Media And Published</h4>

            </div>

        </div >
    )
}
