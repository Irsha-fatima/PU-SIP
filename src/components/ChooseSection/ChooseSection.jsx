import React from 'react';
import './ChooseSection.css';
import { Card } from 'react-bootstrap';

function ChooseSection() {
    return (
        <div>
            <div className='container'>
                <h2 className='text-center mb-5'>Why choose PU-SIP?</h2>
                <div className='row g-4'>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100 p-4 mb-4' style={{ backgroundColor: '#f8f9fa', borderRadius: '20px', boxShadow: '0 8px 30px rgba(255, 105, 180, 0.5)'  }}>
                            <div className='mt-3'>
                                {/* Trophy */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                </svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Centralized Communication Hub
                                </Card.Title>
                                <Card.Text className='text-center'>
                                    PU-SIP serves as a unified platform where students can access a wealth of information and resources in one place. It streamlines communication, ensuring you stay informed and connected with the university community effortlessly.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100 p-4 mb-4' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 8px 30px rgba(255, 105, 180, 0.5)' }}>
                            <div className='mt-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-projector-fill" viewBox="0 0 16 16">
                                    <path d="M2 4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1h6a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm.5 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-12 1a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </div>
                            <Card.Body>
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Enhanced Collaboration Opportunities
                                </Card.Title>
                                <Card.Text className='text-center'>
                                    Our platform facilitates easy collaboration among students, faculty, and staff. Whether you’re looking to join study groups, participate in discussions, or connect with student organizations, PU-SIP provides the tools and features to foster productive interactions and build meaningful connections.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className='col-lg-4'>
                        <Card className='d-flex align-items-center border-0 h-100 p-4 mb-4' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 8px 30px rgba(255, 105, 180, 0.5)' }}> 
                            <div className='mt-3'>
                                {/* Access to Projects and Resources */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
                                    <path d="M4.5 0a.5.5 0 0 1 .5.5v1h7V.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V15H5v-1h7V1H5v1H4.5A.5.5 0 0 1 4 1.5V0h-.5A.5.5 0 0 1 3 0h1.5zM4 4h8v1H4V4zm0 2h8v1H4V6zm0 2h8v1H4V8zm0 2h8v1H4v-1z" />
                                </svg>
                            </div>
                            <Card.Body >
                                <Card.Title className='text-center text-capitalize mb-3'>
                                    Access to Projects and Resources
                                </Card.Title>
                                <Card.Text className= 'text-center'>
                                    PU-SIP centralizes access to a wide range of academic projects and resources. It facilitates seamless sharing and collaboration on projects with peers, making group work efficient. Additionally, PU-SIP helps you manage and organize resources effectively, ensuring you can quickly find and use what you need to stay focused on your academic goals.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseSection;

