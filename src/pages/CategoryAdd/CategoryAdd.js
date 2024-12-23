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

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const validate = () => {
        const newErrors = {};
        if (!formFields.name.trim()) newErrors.name = "Please fill in the category name.";
        if (!formFields.colors.trim()) newErrors.colors = "Please fill in the color.";

        // Validate image URL
        const imageURL = formFields.images[0];
        const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|svg))$/i;
        if (!imageURL?.trim()) {
            newErrors.images = "Please provide an image URL.";
        } else if (!urlRegex.test(imageURL)) {
            newErrors.images = "Invalid image URL.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const changeInput = (e) => {
        setformFields(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
        setErrors(prevErrors => ({ ...prevErrors, [e.target.name]: "" })); // Clear error
    };

    const addImgUrl = (e) => {
        setformFields(prevState => ({
            ...prevState,
            images: [e.target.value]
        }));
        setErrors(prevErrors => ({ ...prevErrors, images: "" })); // Clear error
    };

    const addCategory = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            const res = await postData("/api/category/create", formFields);
            console.log(res);
            setSuccessMessage("Category added successfully!");
            setformFields({ name: "", images: [], colors: "" });
            setTimeout(() => {
                setSuccessMessage("");
            }, 3500);

        } catch (error) {
            console.error("Error adding category:", error);
            setSuccessMessage("Failed to add category. Please try again.");
            setTimeout(() => {
                setSuccessMessage("");
            }, 3500);
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
                                {errors.name && <p className="error-text">{errors.name}</p>}
                            </div>

                            <div className='form-group'>
                                <h6>IMAGE URL</h6>
                                <input
                                    type='text'
                                    name='images'
                                    value={formFields.images[0] || ""}
                                    onChange={addImgUrl}
                                />
                                {errors.images && <p className="error-text">{errors.images}</p>}
                            </div>

                            <div className='form-group'>
                                <h6>COLOR</h6>
                                <input
                                    type='text'
                                    name='colors'
                                    value={formFields.colors}
                                    onChange={changeInput}
                                />
                                {errors.colors && <p className="error-text">{errors.colors}</p>}
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
};
