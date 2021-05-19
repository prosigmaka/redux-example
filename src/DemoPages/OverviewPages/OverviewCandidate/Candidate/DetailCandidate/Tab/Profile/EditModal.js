// import React, { useState, useEffect } from 'react';
// import {
//     Modal, ModalBody, ModalHeader, Form,
//     FormGroup, Label, Input, Button, CustomInput, ModalFooter
// } from 'reactstrap';
// import {
//     faSave, faUndo
// } from '@fortawesome/free-solid-svg-icons';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';

// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import { SERVICE } from "../../../../../../../config/config.json";
// const MySwal = withReactContent(Swal);

// const EditModal = (props) => {
//     const initialState = {
//         id: "",
//         nama: "",
//         jenisKelamin: "",
//         tempatLahir: "",
//         tanggalLahir: "",
//         alamat: "",
//         email: "",
//         noHp: ""
//     };

//     const [currentProfile, setCurrentProfile] = useState(initialState);
//     const [errors, setErrors] = useState({
//         nama: "",
//         jenisKelamin: "",
//         tempatLahir: "",
//         tanggalLahir: "",
//         alamat: "",
//         email: "",
//         noHp: ""
//     })

//     const validateForm = (error) => {
//         let valid = true;
//         Object.values(error).forEach(
//             (val) => val.length > 0 && (valid = false)
//         );
//         return valid;
//     }

//     const get = id => {
//         axios.get(SERVICE.JAVA_SERVICE + "/candidate/" + id).then(res => {
//             setCurrentProfile(res.data.data)
//         })
//     }

//     useEffect(() => {
//         get(props.profile)
//     }, [props.profile])

//     const handleInputChange = event => {
//         const { name, value } = event.target;
//         let error = errors;
//         switch (name) {
//             case 'nama':
//                 if (value.length < 1) {
//                     error.nama = 'Nama wajib diisi'
//                 }
//                 // else if (value.length > 100) {
//                 //     error.nama = 'Nama maksimal 50 karakter'
//                 // } else if (value.length < 3) {
//                 //     error.nama = 'Nama minimal 3 karakter'
//                 // } 
//                 else {
//                     error.nama = ''
//                 }
//                 break;
//             case 'tempatLahir':
//                 if (value.length < 1) {
//                     error.tempatLahir = 'Tempat lahir wajib diisi'
//                 }
//                 // else if (value.length > 20) {
//                 //     error.tempatLahir = 'Tempat lahir maksimal 20 karakter'
//                 // } else if (value.length < 3) {
//                 //     error.tempatLahir = 'Tempat lahir minimal 3 karakter'
//                 // } 
//                 else {
//                     error.tempatLahir = ''
//                 }
//                 break;
//             case 'alamat':
//                 error.alamat = value.length < 1
//                     ? "Alamat wajib diisi" :
//                     '';
//                 break;
//             case 'email':
//                 if (value.length < 1) {
//                     error.email = "Email wajib diiisi"
//                 } else if
//                     (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
//                     error.email = "Email tidak valid"
//                 } else {
//                     error.email = ""
//                 }
//                 break;
//             case 'noHp':
//                 if (!/^[0-9\b]+$/.test(value) && value.length > 0) {
//                     error.noHp = "No Hp wajib berupa angka"
//                 } else if (value.length < 1) {
//                     error.noHp = 'No Hp wajib diisi'
//                 } else if (value.length > 13) {
//                     error.noHp = 'No Hp maksimal 13 angka'
//                 } else if (value.length < 10) {
//                     error.noHp = 'No Hp minimal 10 angka'
//                 } else {
//                     error.noHp = ""
//                 } break;
//             default:
//                 break
//         }
//         setCurrentProfile({ ...currentProfile, [name]: value })
//         setErrors({ ...errors })

//     }

//     const saveProfile = async () => {
//         const formValid = validateForm(errors)
//         if (formValid) {
//             var dataProfile = {
//                 id: currentProfile.id,
//                 nama: currentProfile.nama,
//                 jenisKelamin: currentProfile.jenisKelamin,
//                 tempatLahir: currentProfile.tempatLahir,
//                 tanggalLahir: currentProfile.tanggalLahir,
//                 alamat: currentProfile.alamat,
//                 email: currentProfile.email,
//                 noHp: currentProfile.noHp
//             }
//             if (!dataProfile.nama || !dataProfile.jenisKelamin || !dataProfile.tempatLahir || !dataProfile.tanggalLahir
//                 || !dataProfile.alamat || !dataProfile.email || !dataProfile.noHp) {
//                 await MySwal.fire({
//                     icon: 'error',
//                     title: 'Please re-check your data!',
//                     showConfirmButton: false,
//                     timer: 3000,
//                 })
//             } else {
//                 await axios.post(SERVICE.JAVA_SERVICE + "/candidate/", dataProfile).then(response => {
//                     if (response.data.status === 200) {
//                         //setCurrentProfile(initialState);
//                         props.toggle();
//                         props.profdata(true)
//                         MySwal.fire({
//                             icon: 'success',
//                             title: 'Your data has been saved successfully!',
//                             showConfirmButton: false,
//                             timer: 3000,
//                         })
//                     } else {
//                         MySwal.fire({
//                             icon: 'error',
//                             title: 'Your data failed to save!',
//                             showConfirmButton: false,
//                             timer: 3000,
//                         })
//                     }
//                 })
//             }
//         } else {
//             await MySwal.fire({
//                 icon: 'error',
//                 title: 'Please re-check your data!',
//                 showConfirmButton: false,
//                 timer: 3000,
//             })
//         }
//     }

//     const closeModal = () => {
//         setCurrentProfile(initialState)
//         get(props.profile);
//         setErrors({
//             kode: "",
//             nama: "",
//             jenisKelamin: "",
//             tempatLahir: "",
//             tanggalLahir: "",
//             alamat: "",
//             email: "",
//             noHp: ""
//         })
//         props.toggle();
//     }

//     const resetProfile = () => {
//         setCurrentProfile(initialState)
//         get(props.profile);
//     }

//     const closeBtn = <button className="close" onClick={closeModal}>&times;</button>;

//     return (
//         <Modal isOpen={props.isOpen} toggle={props.toggle} backdrop='static'>
//             {/* {console.log(props.profile)} */}
//             <ModalHeader toggle={props.toggle} close={closeBtn} >
//                 Edit Candidate Profile
//             </ModalHeader>
//             <Form onReset={resetProfile}>
//                 <ModalBody>
//                     <Input name="id" id="id" value={currentProfile.id} onChange={handleInputChange} hidden />
//                     <FormGroup>
//                         <Label for="kode">Kode
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="text" name="kode" id="kode" placeholder="Enter Code"
//                             autoComplete='off' value={currentProfile.kode || ''} onChange={handleInputChange}
//                             invalid={errors.kode.length > 0 ? true : ""} required
//                         />
//                         {errors.kode.length > 0 &&
//                             <span className='error'>{errors.kode}</span>}
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="nama">Nama
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="text" name="nama" id="nama" placeholder="Enter Name"
//                             autoComplete='off' value={currentProfile.nama || ''} onChange={handleInputChange}
//                             invalid={errors.nama.length > 0 ? true : ""} required
//                         />
//                         {errors.nama.length > 0 &&
//                             <span className='error'>{errors.nama}</span>}
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="jenisKelamin">Jenis Kelamin
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <div>
//                             <CustomInput type="radio" id="perempuan" name="jenisKelamin"
//                                 label="Perempuan"
//                                 value="Perempuan"
//                                 checked={currentProfile.jenisKelamin === "Perempuan"}
//                                 onChange={handleInputChange}
//                                 inline
//                             />
//                             <CustomInput type="radio" id="laki-laki" name="jenisKelamin"
//                                 label="Laki-laki"
//                                 value="Laki-laki"
//                                 checked={currentProfile.jenisKelamin === "Laki-laki"}
//                                 onChange={handleInputChange}
//                                 inline
//                             />
//                         </div>
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="tempatLahir">Tempat Lahir
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="text" name="tempatLahir" id="tempatLahir" placeholder="Enter Birthplace"
//                             autoComplete='off' value={currentProfile.tempatLahir || ''} onChange={handleInputChange}
//                             invalid={errors.tempatLahir.length > 0 ? true : ""} required
//                         />
//                         {errors.tempatLahir.length > 0 &&
//                             <span className='error'>{errors.tempatLahir}</span>}
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="tanggalLahir">Tanggal Lahir
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="date" name="tanggalLahir" id="tanggalLahir" placeholder="Enter Birthdate"
//                             autoComplete='off' value={currentProfile.tanggalLahir || ''} onChange={handleInputChange}
//                         />
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="alamat">Address
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="textarea" rows={3} name="alamat" id="alamat" placeholder="Enter Address"
//                             autoComplete='off' value={currentProfile.alamat || ''} onChange={handleInputChange}
//                             invalid={errors.alamat.length > 0 ? true : ""} required
//                         />
//                         {errors.alamat.length > 0 &&
//                             <span className='error'>{errors.alamat}</span>}
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="email">Email
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="email" name="email" id="email" placeholder="Enter Email"
//                             autoComplete='off' value={currentProfile.email || ''} onChange={handleInputChange}
//                             invalid={errors.email.length > 0 ? true : ""} required disabled
//                         />
//                         {errors.email.length > 0 &&
//                             <span className='error'>{errors.email}</span>}
//                     </FormGroup>
//                     <FormGroup>
//                         <Label for="noHp">No Hp
//                         <span style={{ color: 'red' }}> *</span>
//                         </Label>
//                         <Input type="text" name="noHp" id="noHp" placeholder="Enter No Hp"
//                             autoComplete='off' value={currentProfile.noHp || ''} onChange={handleInputChange}
//                             invalid={errors.noHp.length > 0 ? true : ""} required
//                         />
//                         {errors.noHp.length > 0 &&
//                             <span className='error'>{errors.noHp}</span>}
//                     </FormGroup>
//                 </ModalBody>
//                 <ModalFooter>
//                     <Button className="btn-pill btn-lg btn-shadow mt-1" type="reset"
//                         style={{ float: "left", backgroundColor: "#ffffff", border: "none", color: "currentcolor" }}
//                     >
//                         <FontAwesomeIcon icon={faUndo} />
//                         <span> Reset</span>
//                     </Button>
//                     <Button className="btn-pill btn-lg btn-shadow mt-1 float-right" type="button" onClick={saveProfile}
//                         style={{ background: "#C0D39A", border: "none", color: "currentcolor" }}
//                     >
//                         <FontAwesomeIcon icon={faSave} />
//                         <span>   Submit</span>
//                     </Button>
//                 </ModalFooter>
//             </Form>

//         </Modal>
//     );


// }

// export default EditModal;
