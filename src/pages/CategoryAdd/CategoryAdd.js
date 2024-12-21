import React, { useContext, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import { FaCloudUploadAlt } from "react-icons/fa";
import { postData } from '../../utils/api';

export const CategoryAdd = () => {
    const StyledBreadcrumb = styled(Chip)(({ theme }) => {
        const isLightMode = context.themeMode; // Assuming `themeMode` is true for light mode
        const backgroundColor = isLightMode ? theme.palette.grey[100] : "#071739";

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

    const context = useContext(MyContext);

    const [formFields, setformFields] = useState({
        name: "",
        images: [],
        colors: ""
    });

    const [successMessage, setSuccessMessage] = useState("");

    const changeInput = (e) => {
        setformFields(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const addImgUrl = (e) => {
        setformFields(prevState => ({
            ...prevState,
            images: [e.target.value]
        }));
    };

    const addCategory = async (e) => {
        e.preventDefault();

        try {
            const res = await postData("/api/category/create", formFields);
            console.log(res);
            setSuccessMessage("Category added successfully!");
            setformFields({ name: "", images: [], colors: "" });
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);

        } catch (error) {
            console.error("Error adding category:", error);
            setSuccessMessage("Failed to add category. Please try again.");
            setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
        }
    };

    return (
        <div className="right-content">
            <div className="cardDetails shadow border-0 p-3 mt-3 d-flex justify-content-between align-items-center">
                <h4 className='mb-0 px-3'>Add Category</h4>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link to={"/"}>
                        <StyledBreadcrumb
                            component="a"
                            href="#"
                            label="Home"
                            icon={<HomeIcon fontSize="small" />}
                        />
                    </Link>
                    <Link to={"/categoryAdd"}>
                        <StyledBreadcrumb component="a" href="#" label="Add Category" />
                    </Link>
                </Breadcrumbs>
            </div>

            <div className="cardDetails shadow border-0 p-3 mt-3">
                <form className='form' onSubmit={addCategory}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h5 className='mb-3'>Basic Information</h5>

                            <div className='form-group'>
                                <h6>CATEGORY NAME</h6>
                                <input
                                    type='text'
                                    name='name'
                                    value={formFields.name}
                                    onChange={changeInput}
                                />
                            </div>

                            <div className='form-group'>
                                <h6>IMAGE URL</h6>
                                <input
                                    type='text'
                                    name='images'
                                    value={formFields.images[0] || ""}
                                    onChange={addImgUrl}
                                />
                            </div>

                            <div className='form-group'>
                                <h6>COLOR</h6>
                                <input
                                    type='text'
                                    name='colors'
                                    value={formFields.colors}
                                    onChange={changeInput}
                                />
                            </div>
                        </div>

                        <div>
                            <Button type='submit' className="btn-blue btn-lg">
                                <span className='uploadIcon'><FaCloudUploadAlt /></span> PUBLISH & VIEW
                            </Button>
                        </div>
                    </div>
                </form>
                <div className='row'>
                    <div className='col-sm-12'>
                        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}
                    </div>
                </div>
            </div>

            <div className="cardDetails shadow border-0 p-3 mt-3 d-flex justify-content-between align-items-center">
                <h4 className='mb-0 px-3'>Media And Published</h4>
            </div>
        </div>
    )
}    