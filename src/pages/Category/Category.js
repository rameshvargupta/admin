import React, { useContext, useEffect, useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import { Button } from "@mui/material";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MyContext } from '../../App';
import Pagination from '@mui/material/Pagination';
import { deleteData, editData, fetchDataFromApi } from '../../utils/api';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';

export const Category = () => {
    const context = useContext(MyContext);
    const [categoryData, setCategoryData] = useState([]);
    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [showSpin, setShowSpin] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false); // State for confirmation dialog
    const [deleteId, setDeleteId] = useState(null); // Store category ID to delete
    const [formFields, setFormFields] = useState({
        name: "",
        images: [],
        colors: ""
    });

    // Fetch Categories on Component Load
    useEffect(() => {
        fetchDataFromApi('/api/category').then((res) => {
            setCategoryData(res);
        });
    }, []);

    // Open Edit Dialog and Fetch Category Data
    const editCategory = (_id) => {
        setOpen(true);
        setEditId(_id);
        fetchDataFromApi(`/api/category/${_id}`).then((res) => {
            setFormFields({
                name: res.name,
                images: res.images,
                colors: res.colors
            });
        });
    };

    // Handle Input Changes
    const changeInput = (e) => {
        setFormFields((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    // Handle Image URL Input
    const addImgUrl = (e) => {
        setFormFields((prevState) => ({
            ...prevState,
            images: [e.target.value]
        }));
    };

    // Submit Edited Category Data
    const EditCategoryFun = async () => {
        try {
            setShowSpin(true);
            await editData(`/api/category/${editId}`, formFields);
            const updatedData = await fetchDataFromApi('/api/category');
            setCategoryData(updatedData); // Update UI with new data
            handleClose(); // Close the dialog
            setShowSpin(false);
        } catch (error) {
            console.error("Error updating category:", error);
        }
    };

    // Open Confirmation Dialog for Deletion
    const openConfirmDeleteDialog = (id) => {
        setDeleteId(id);
        setConfirmOpen(true);
    };

    // Handle Deletion
    const deleteCategory = async () => {
        try {
            await deleteData(`/api/category/${deleteId}`);
            // Remove the deleted category from state
            setCategoryData((prevData) => prevData.filter(item => item._id !== deleteId));
            setConfirmOpen(false); // Close confirmation dialog
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    // Close the dialogs
    const handleClose = () => {
        setOpen(false);
        setFormFields({ name: "", images: [], colors: "" });
    };

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

    return (
        <>
            <div className="right-content productListSection">
                <div className="cardDetails shadow border-0 p-3 mt-3 d-flex justify-content-between align-items-center">
                    <h4 className='mb-0 px-3'>Category List</h4>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link to={"/"}><StyledBreadcrumb component="a" href="#" label="Home" icon={<HomeIcon fontSize="small" />} /></Link>
                        <Link to={"/products"}><StyledBreadcrumb component="a" href="#" label="Category List" /></Link>
                    </Breadcrumbs>
                </div>

                <div>
                    <div className="table-responsive p-3 mt-3">
                        <table className="table table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>#</th>
                                    <th>IMAGE</th>
                                    <th>CATEGORY</th>
                                    <th>COLOR</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody className='category'>
                                {categoryData.length !== 0 ? (
                                    categoryData.map((item, index) => {
                                        const { colors, images, name, _id } = item;
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><div className="img"><img src={images} alt="Category" /></div></td>
                                                <td>{name}</td>
                                                <td>{colors}</td>
                                                <td>
                                                    <div className="tableActions d-flex align-items-center justify-content-center">
                                                        <Button className="success" color="success"><FaPencilAlt onClick={() => editCategory(_id)} /></Button>
                                                        <Button className="error" color="error" onClick={() => openConfirmDeleteDialog(_id)}><MdDelete /></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr><td colSpan="5">No data available</td></tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="paginationSection d-flex justify-space-between align-items-center">
                        <p>Showing <b>{categoryData.length}</b> of <b>20</b> results</p>
                        <Pagination count={Math.ceil(categoryData.length / 10)} color="primary" showFirstButton showLastButton />
                    </div>
                </div>
            </div>

            {/* Confirmation Dialog for Deletion */}
            <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                    Are you sure you want to delete this category?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
                    <Button onClick={deleteCategory} color="error">Delete</Button>
                </DialogActions>
            </Dialog>

            {/* Edit Dialog */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Edit Category</DialogTitle>
                <DialogContent className='pt-3'>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="name"
                        name="name"
                        label="Category Name"
                        type="text"
                        fullWidth
                        onChange={changeInput}
                        value={formFields.name || ""}
                        className='mb-3'
                    />
                    <TextField
                        required
                        margin="dense"
                        id="images"
                        name="images"
                        label="Image URL"
                        type="text"
                        fullWidth
                        onChange={addImgUrl}
                        value={formFields.images || ""}
                        className='mb-3'
                    />
                    <TextField
                        required
                        margin="dense"
                        id="colors"
                        name="colors"
                        label="Category Color"
                        type="text"
                        fullWidth
                        onChange={changeInput}
                        value={formFields.colors || ""}
                    />
                </DialogContent>
                <DialogActions className='mx-3 mb-3'>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={EditCategoryFun} className='btn-blue btn-lg'>{showSpin !== true ? "Submit" : <CircularProgress color="inherit" className='loader' />}  </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
