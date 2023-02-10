import React, { useContext, useState } from 'react';
import GlobalContext from './Context/Api';
import {faRemove, faEdit, faAdd, faShare, faShareAlt, faPrint, faSearch, faSave, faTimeline, faTimes, faCheck, faDatabase, faFilePdf, faFile} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import findUser from './Images/find_user.png';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

function Login() {
  const [show, setShow] = useState(false);
  const [form, setform] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchTeerm, setsearchTeerm] = useState('');

  const [firstName, setfirstName] = useState('');
  const [surname, setsurname] = useState('');
  const [otherNames, setotherNames] = useState('');
  const [gender, setgender] = useState('');
  const [dob, setdob] = useState('');
  const [maritalStatus, setmaritalStatus] = useState('');
  const [religion, setreligion] = useState('');
  const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [address, setaddress] = useState('');
    const [lga, setlga] = useState('');
    const [state, setstate] = useState('');
    const [accnumber, setaccnumber] = useState('');
    const [accname, setaccname] = useState('');
    const [bank, setbank] = useState('');
    const [image, setimage] = useState('');
    const [guarantorname, setguarantorname] = useState('');
    const [guarantorphone, setguarantorphone] = useState('');
    const [guarantorimage, setguarantorimage] = useState('');


  const [myStaff, setmyStaff] = useState([]);



  const postStaff=()=>{ 
    const formData=new FormData();
    formData.append('firstName', firstName);
      formData.append('surname', surname);
      formData.append('dob', dob);
formData.append('image')

    axios.post('http://localhost/manager/staff.php', formData).then((response)=>{
      console.log(response.data)
    })
  }
  
const addStaff=()=>{

setmyStaff([...myStaff, {
    firstName,
    surname,
    otherNames,
    gender,
    dob,
    maritalStatus,
    religion,
    phone,
    email,
    address,
    lga,
    state,
    accnumber,
    accname,
    bank,
    image,
    guarantorimage,
    guarantorname,
    guarantorphone
 }])
 setform(false);
 setfirstName('')
 setsurname('')
 setotherNames('')
 setgender('')
 setdob('')
  setmaritalStatus('')
   setreligion('')
    setphone('')
     setemail('')
      setaddress('')
     setlga('')
     setaccnumber('')
     setaccname('')
     setbank('')
     postStaff();
}



  return (
    <div>
            <div id="wrapper">
        <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom: "0"}}>
            <div className="navbar-header">
   
                <a className="navbar-brand" href="index.html">Roi Management</a> 
            </div>
  <div style={{color: "white",
padding: "15px 50px 5px 50px",
float: "right",
fontSize: "16px"}}> Last access : 26 January 2023 &nbsp; <a href="/#/" className="btn btn-danger square-btn-adjust">Logout</a> </div>
        </nav>   
                <nav className="navbar-default navbar-side" role="navigation">
            <div className="sidebar-collapse">
                <ul className="nav list-group text-light" id="main-menu">
                <img src={findUser} alt='y' className="user-image img-responsive"/>
                <li className='btn btn-dark'>
                    Dashboard
                </li>
                <li className='btn btn-dark active'>
                    Staff
                </li>
                <li className='btn btn-dark'>
                    Payroll
                </li>
                <li className='btn btn-dark'>
                    Setting
                </li>

                </ul>
               
            </div>
            
        </nav>  
        
        <div id="page-wrapper" >
            <div id="page-inner">
        
            <div class="row">
                    <div class="col-md-12">
                     <h2>Staff Database</h2>   
                       
                       
                    </div>
                </div>
          
                 <hr />
               
            <div class="row">
                <div class="col-md-12">
            
                    <div class="panel panel-default">
                        
                        <div class="panel-body">
                        <div class="col-sm-12">
                          <span className='badge bg-dark'>
                            <button className='btn text-success' onClick={()=>{
                                setform(!form)
                            }}> <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon> </button>

<button className='btn text-warning' onClick={handleShow}> <FontAwesomeIcon icon={faShareAlt}></FontAwesomeIcon> </button>


<button className='btn text-primary' onClick={()=>{
                                setform(!form)
                            }}> <FontAwesomeIcon icon={faPrint}></FontAwesomeIcon> </button>
</span>


                            </div>


                            <div class="card animated" style={form?{display:'block'}:{display:'none'}}>
            <div class="card-body">
              <h5 class="card-title">Enter New Staff</h5>

              <div class="text-center" style={{float:'right'}}>
                  <button type="submit" class="btn btn-outline-success" onClick={addStaff}> <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> Save </button>
                  <button type="reset" class="btn btn-outline-danger" onClick={()=>{
                    setform(false)
                  }}> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </button>
                </div><br/><br/>

              <div class="row g-3">
              <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="First Name" value={firstName} onChange={(e)=>{
                    setfirstName(e.target.value)
                  }} />
                </div>
                <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Surname" value={surname} onChange={(e)=>{
                    setsurname(e.target.value)
                  }}/>
                </div>
                <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Other Names" value={otherNames} onChange={(e)=>{
                    setotherNames(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                    <label>
                        Gender
                    </label><br/>
                      <input style={{margin: '5px',}}  type="radio" class="" name='gender' value={'Male'} onChange={(e)=>{
                    setgender(e.target.value)
                  }} /> Male 
                  <input style={{margin: '5px',}} type="radio" class="" name='gender' value={'Female'} onChange={(e)=>{
                    setgender(e.target.value)
                  }}/> Female 
                </div>
                <div class="col-md-6">
                    <label>
                        Date of Birth
                    </label><br/>
                  <input type={'date'} class="form-control" placeholder="Date of Birth" value={dob} onChange={(e)=>{
                    setdob(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">

                <div class="col-md-6">
                    <label>
                        Marital Status
                    </label><br/>
                    <input style={{margin: '5px',}}  type="radio" class="" name='marital' value='Married' onChange={(e)=>{
                    setmaritalStatus(e.target.value)
                  }}/> Married 
                <input style={{margin: '5px',}} type="radio" class=""  value='Single' name='marital' onChange={(e)=>{
                    setmaritalStatus(e.target.value)
                  }}/> Single 
              </div>
                              </div>
                <div class="col-md-6">
                  <select  class="form-select" value={religion} onChange={(e)=>{
                    setreligion(e.target.value)
                  }} >
                    <option>
Religion
                    </option>
                    <option value={'Christianity'}>
                        Christianity
                    </option>
                    <option value={'Islam'}>
                        Islam
                    </option>
                  
                    </select>
                </div>
                <div class="col-md-6">
                  <input type="email" class="form-control" placeholder="Email" value={email} onChange={(e)=>{
                    setemail(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                  <input type="tel" class="form-control" placeholder="Phone" value={phone} onChange={(e)=>{
                    setphone(e.target.value)
                  }}/>
                </div>
                <div class="col-12">
                  <input type="text" class="form-control" placeholder="Address" value={address} onChange={(e)=>{
                    setaddress(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="LGA of Origin" value={lga} onChange={(e)=>{
                    setlga(e.target.value)
                  }}/>
                </div>
                <div class="col-md-6">
                <input type="text" class="form-control" placeholder="State of Origin" value={state} onChange={(e)=>{
                    setstate(e.target.value)
                  }}/>
                </div>

  <div class="col-md-6">
    <label>
      Passport Photograph
    </label>
                <input type="file" class="form-control" placeholder="State of Origin" value={image} onChange={(e)=>{
                    setimage(e.target.value)
                  }}/>
                </div>

                  <div class="col-md-12">
                <input type="text" class="form-control" placeholder="Guarantor Name" value={guarantorname} onChange={(e)=>{
                    setguarantorname(e.target.value)
                  }}/>
                </div>

                  <div class="col-md-6">
                <input type="tel" class="form-control" placeholder="Guarantor Phone No" value={guarantorphone} onChange={(e)=>{
                    setguarantorphone(e.target.value)
                  }}/>
                </div>

                  <div class="col-md-6">
                    <label>Guarantor Passport</label>
                <input type="file" class="form-control"  value={guarantorimage} onChange={(e)=>{
                    setguarantorimage(e.target.value)
                  }}/>
                </div>


                <div class="col-4">
                  <input type="number" class="form-control" placeholder="Account Number" value={accnumber} onChange={(e)=>{
                    setaccnumber(e.target.value)
                  }}/>
                </div>
                <div class="col-md-4">
                  <input type="text" class="form-control" placeholder="Account Name" value={accname} onChange={(e)=>{
                    setaccname(e.target.value)
                  }}/>
                </div>
                <div class="col-md-4">
                <input type="text" class="form-control" placeholder="Bank" value={bank} onChange={(e)=>{
                    setbank(e.target.value)
                  }}/>
                </div>
               
                <div class="text-center">
                  <button type="submit" class="btn btn-primary" onClick={addStaff}> <FontAwesomeIcon icon={faSave}></FontAwesomeIcon> </button>
                  <button type="reset" class="btn btn-outline-danger" onClick={()=>{
                    setform(false)
                  }}> <FontAwesomeIcon icon={faTimes}> </FontAwesomeIcon> </button>
                </div>
              </div>

            </div>
          </div>
          <div id="dataTables-example_filter" class="dataTables_filter" style={{display:'flex', justifyContent:'right'}}>
                            <div><FontAwesomeIcon icon={faSearch}></FontAwesomeIcon><input type="search" class="form-control input-sm" placeholder='Search' aria-controls="dataTables-example" onChange={(e)=>{
                                setsearchTeerm(e.target.value)
                            }} /></div></div>
                            <div class="table-responsive">
                                <table class="table  table-striped table-hover"  style={{fontSize:'small'}}>
                                <thead class="thead-dark bg-dark text-light">
                                        <tr>
                                        <th scope="col">Image</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Surname</th>
                                            <th scope="col">Other Names</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Date of Birth</th>
                                            <th scope="col">Marital Status</th>
                                            <th scope="col">Religion</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">LGA</th>
                                            <th scope="col">State</th>
                                            <th scope="col">Account Number</th>
                                            <th scope="col">Account Name</th>
                                            <th scope="col">Bank</th>
                                            <th scope="col">Guarantor</th>
                                            <th scope="col">Guarantor Phone</th>
                                            <th scope="col">Guarantor Image</th>

                                                  <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                     {
                                            myStaff.filter((sta)=>{
                                                if(searchTeerm===''){
return sta
                                                }
                                           else if(sta.firstName.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.surname.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.otherNames.toLowerCase().includes(searchTeerm.toLowerCase())|| sta.email.toLowerCase().includes(searchTeerm.toLowerCase()) || sta.phone.toLowerCase().includes(searchTeerm.toLowerCase())){
                                                    return sta
                                                }else{
                                                    return null
                                                }
                                            }).map((staf, key)=>{
                                                return           <tr key={key} >
                                                             <td><img alt='' style={{height:'50px'}} src={findUser} /></td>
                                                <td>{staf.firstName}</td>
                                     
                                                <td>{staf.surname}</td>
                                                <td>{staf.otherNames}</td>
                                                <td className="center">{staf.gender}</td>
                                                <td className="center">{staf.dob}</td>
                                                <td>{staf.maritalStatus}</td>
                                                <td>{staf.religion}</td>
                                                <td>{staf.phone}</td>
                                                <td className="center">{staf.email}</td>
                                                <td className="center">{staf.address}</td>
                                                <td>{staf.lga}</td>
                                                <td>{staf.state}</td>
                                                <td>{staf.accnumber}</td>
                                                <td className="center">{staf.accname}</td>
                                                <td className="center">{staf.bank}</td>
                                                <td>{staf.guarantorname}</td>
                                            <td>{staf.guarantorphone}</td>
                                            <td><img alt='' src={findUser} style={{height:'50px'}} /></td>
                                                <td className="center">
                                                <button className='btn text-primary'>
                                                    <FontAwesomeIcon icon={faEdit}> </FontAwesomeIcon>
                                                  </button>
                                                  <button className='btn text-danger'>
                                              <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon>
                                                  </button>
                                                </td>
                                            </tr>
                                            })
                                        }
                                       
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
            
                </div>
            </div>
         
                </div>
            </div>
                
       
                
    </div>
      
     
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className='list-group list-group-horizontal' style={{cursor:'pointer'}}>
<li className='list-group-item active'>
 <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon> Excel
</li>
<li className='list-group-item'>
<FontAwesomeIcon icon={faFilePdf}></FontAwesomeIcon> PDF
</li>
<li className='list-group-item'>
<FontAwesomeIcon icon={faFile}></FontAwesomeIcon> Word
</li>
          </ul>


        </Modal.Body>
        <Modal.Footer>
          
          <button className='btn btn-success' onClick={handleClose}>
          <FontAwesomeIcon icon={faShare}></FontAwesomeIcon>  Export
          </button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Login