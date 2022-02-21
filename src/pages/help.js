import '../styles/help.css'

// import HelpImage from '../images/landing-help.jpg'

import { CardGroup, Carousel } from 'react-bootstrap'
import ScrollAnimation from 'react-animate-on-scroll'
import React from "react";


function HelpBottom() {
  return (
		<>
			<section style={{ boxSizing: 'border-box', display: 'block' }}>
				<div
					className='container text-center about-text'
					style={{
						boxSizing: 'border-box',
						width: '100%',
						paddingRight: '15px',
						paddingLeft: '15px',
						marginRight: 'auto',
						marginLeft: 'auto',
						maxWidth: '1140px',
						textAlign: 'center',
					}}
				>
					<div
						className='row'
						style={{
							boxSizing: 'border-box',
							display: 'flex',
							flexWrap: 'wrap',
							marginRight: '-15px',
							marginLeft: '-15px',
						}}
					>
						<div
							className='col aos-init aos-animate'
							style={{
								boxSizing: 'border-box',
								position: 'relative',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								flexBasis: '0px',
								flexGrow: 1,
								maxWidth: '100%',
								pointerEvents: 'auto',
								transitionTimingFunction: 'ease',
								transitionDuration: '1.5s',
								transitionProperty:
									'opacity, transform, -webkit-transform',
								opacity: 1,
								transform: 'none',
							}}
						>
							<h3
								className='display-4 mb-5'
								style={{
									boxSizing: 'border-box',
									marginTop: '0px',
									fontSize: '3.5rem',
									fontWeight: 300,
									lineHeight: 1.2,
									marginBottom: '3rem',
								}}
							>
								DONATE
							</h3>
						</div>
					</div>
					<div
						className='row mb-5'
						style={{
							boxSizing: 'border-box',
							display: 'flex',
							flexWrap: 'wrap',
							marginRight: '-15px',
							marginLeft: '-15px',
							marginBottom: '3rem',
						}}
					>
						<div
							className='col aos-init aos-animate'
							style={{
								boxSizing: 'border-box',
								position: 'relative',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								flexBasis: '0px',
								flexGrow: 1,
								maxWidth: '100%',
								pointerEvents: 'auto',
								transitionTimingFunction: 'ease',
								transitionDuration: '1.75s',
								transitionProperty:
									'opacity, transform, -webkit-transform',
								opacity: 1,
								transform: 'none',
								lineHeight: 2,
							}}
						>
							<h3
								style={{
									boxSizing: 'border-box',
									marginTop: '0px',
									marginBottom: '0.5rem',
									fontWeight: 500,
									fontSize: '1.75rem',
									lineHeight: 1.6,
								}}
							>
								It is important that those of us who are
								successful in this world give back to those who
								need it. Help them by donating to any of these
								charities.
							</h3>
							<a
								href='https://www.paypal.com/paypalme/itsaboutgivingnow'
								target='_blank'
								rel='noreferrer'
								style={{
									boxSizing: 'border-box',
									textDecoration: 'none',
									color: 'rgb(0, 123, 255)',
									backgroundColor: 'transparent',
								}}
							>
								<button
									className='btn btn-primary btn-lg mt-3'
									type='button'
									style={{
										boxSizing: 'border-box',
										margin: '0px',
										fontFamily: 'inherit',
										overflow: 'visible',
										textTransform: 'none',
										appearance: 'button',
										border: '1px solid transparent',
										display: 'inline-block',
										fontWeight: 400,
										textAlign: 'center',
										verticalAlign: 'middle',
										userSelect: 'none',
										transition: 'none 0s ease 0s',
										borderColor: 'rgb(0, 123, 255)',
										color: 'rgb(255, 255, 255)',
										backgroundColor: 'rgb(0, 123, 255)',
										padding: '0.5rem 1rem',
										borderRadius: '0.3rem',
										fontSize: '1.25rem',
										lineHeight: 1.5,
										cursor: 'pointer',
										marginTop: '1rem',
									}}
								>
									Donate
								</button>
							</a>
						</div>
					</div>
				</div>
				<hr
					className='mb-5 mt-5'
					style={{
						overflow: 'visible',
						boxSizing: 'content-box',
						height: '0px',
						borderWidth: '1px 0px 0px',
						borderImage: 'initial',
						borderRightStyle: 'initial',
						borderBottomStyle: 'initial',
						borderLeftStyle: 'initial',
						borderRightColor: 'initial',
						borderBottomColor: 'initial',
						borderLeftColor: 'initial',
						borderTopStyle: 'solid',
						borderTopColor: 'rgba(0, 0, 0, 0.1)',
						width: '60%',
						marginTop: '3rem',
						marginBottom: '3rem',
					}}
				/>
				<div
					className='container text-center'
					style={{
						boxSizing: 'border-box',
						width: '100%',
						paddingRight: '15px',
						paddingLeft: '15px',
						marginRight: 'auto',
						marginLeft: 'auto',
						maxWidth: '1140px',
						textAlign: 'center',
					}}
				>
					<div
						className='row mb-5'
						style={{
							boxSizing: 'border-box',
							display: 'flex',
							flexWrap: 'wrap',
							marginRight: '-15px',
							marginLeft: '-15px',
							marginBottom: '3rem',
						}}
					>
						<div
							className='col aos-init aos-animate'
							style={{
								boxSizing: 'border-box',
								position: 'relative',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								flexBasis: '0px',
								flexGrow: 1,
								maxWidth: '100%',
								pointerEvents: 'auto',
								transitionTimingFunction: 'ease',
								transitionDuration: '1.75s',
								transitionProperty:
									'opacity, transform, -webkit-transform',
								opacity: 1,
								transform: 'none',
								lineHeight: 2,
							}}
						>
							<h3
								className='mb-5 mt-5'
								style={{
									boxSizing: 'border-box',
									fontWeight: 500,
									fontSize: '1.75rem',
									marginTop: '3rem',
									marginBottom: '3rem',
									lineHeight: 1.6,
								}}
							>
								{' '}
								In these times, people are jobless and
								struggling. It is our time to help and give back
								in any way, shape, or form. You can donate to
								those who can't pay rent or volunteer to get
								groceries for the elderly.{' '}
								<br style={{ boxSizing: 'border-box' }} />
								What would you choose?
							</h3>
						</div>
					</div>
				</div>
				<hr
					className='mb-5 mt-5'
					style={{
						overflow: 'visible',
						boxSizing: 'content-box',
						height: '0px',
						borderWidth: '1px 0px 0px',
						borderImage: 'initial',
						borderRightStyle: 'initial',
						borderBottomStyle: 'initial',
						borderLeftStyle: 'initial',
						borderRightColor: 'initial',
						borderBottomColor: 'initial',
						borderLeftColor: 'initial',
						borderTopStyle: 'solid',
						borderTopColor: 'rgba(0, 0, 0, 0.1)',
						width: '60%',
						marginTop: '3rem',
						marginBottom: '3rem',
					}}
				/>
				<div
					className='container text-center about-text'
					style={{
						boxSizing: 'border-box',
						width: '100%',
						paddingRight: '15px',
						paddingLeft: '15px',
						marginRight: 'auto',
						marginLeft: 'auto',
						maxWidth: '1140px',
						textAlign: 'center',
					}}
				>
					<div
						className='row'
						style={{
							boxSizing: 'border-box',
							display: 'flex',
							flexWrap: 'wrap',
							marginRight: '-15px',
							marginLeft: '-15px',
						}}
					>
						<div
							className='col aos-init'
							style={{
								boxSizing: 'border-box',
								position: 'relative',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								flexBasis: '0px',
								flexGrow: 1,
								maxWidth: '100%',
								pointerEvents: 'none',
								transitionTimingFunction: 'ease',
								transform: 'translate3d(0px, 100px, 0px)',
								transitionDuration: '1.5s',
								opacity: 0,
								transitionProperty:
									'opacity, transform, -webkit-transform',
							}}
						>
							<h3
								className='display-4 mb-5'
								style={{
									boxSizing: 'border-box',
									marginTop: '0px',
									fontSize: '3.5rem',
									fontWeight: 300,
									lineHeight: 1.2,
									marginBottom: '3rem',
								}}
							>
								{'Groceries'}
							</h3>
						</div>
					</div>
					<div
						className='row mb-5'
						style={{
							boxSizing: 'border-box',
							display: 'flex',
							flexWrap: 'wrap',
							marginRight: '-15px',
							marginLeft: '-15px',
							marginBottom: '3rem',
						}}
					>
						<div
							className='col aos-init'
							style={{
								boxSizing: 'border-box',
								position: 'relative',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								flexBasis: '0px',
								flexGrow: 1,
								maxWidth: '100%',
								pointerEvents: 'none',
								transitionTimingFunction: 'ease',
								transform: 'translate3d(-100px, 0px, 0px)',
								transitionDuration: '1.75s',
								opacity: 0,
								transitionProperty:
									'opacity, transform, -webkit-transform',
								lineHeight: 2,
							}}
						>
							<h3
								style={{
									boxSizing: 'border-box',
									marginTop: '0px',
									marginBottom: '0.5rem',
									fontWeight: 500,
									fontSize: '1.75rem',
									lineHeight: 1.6,
								}}
							>
								If you need help collecting groceries or want to
								volunteer, fill out this form. We will get back
								to you soon and rest assured, all information
								submitted will stay confidential.
							</h3>
						</div>
						<div
							className='col aos-init'
							style={{
								boxSizing: 'border-box',
								position: 'relative',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								flexBasis: '0px',
								flexGrow: 1,
								maxWidth: '100%',
								pointerEvents: 'none',
								transitionTimingFunction: 'ease',
								transform: 'translate3d(100px, 0px, 0px)',
								transitionDuration: '2s',
								opacity: 0,
								transitionProperty:
									'opacity, transform, -webkit-transform',
							}}
						>
						

							<iframe
								id='Iframe'
								height='1351'
								title='form-frame'
								width='640'
								frameBorder='0'
								marginHeight='0'
								marginWidth='0'
								src='https://docs.google.com/forms/d/e/1FAIpQLSe_P-5mgjLBF0V45CUQuOLnuXwoYOaPJW66Bfb9E_ctoNg_iA/viewform?embedded=true'
								style={{
									boxSizing: 'border-box',
									height: '50rem',
								}}
							>
								Loading…
							</iframe>
						</div>
					</div>
				</div>
			</section>
		</>
  )
}



function Help() {
	return (
		<>
			<section style={{ boxSizing: 'border-box', display: 'block' }}>
				<div
					id='p-landingimg'
					className='view jumbotron jumbotron-fluid aos-init aos-animate'
					style={{
						boxSizing: 'border-box',
						marginBottom: '2rem',
						padding: '4rem 2rem',
						borderRadius: '0px',
						paddingRight: '0px',
						paddingLeft: '0px',
						pointerEvents: 'auto',
						transitionTimingFunction: 'ease',
						transitionDuration: '0.5s',
						transitionProperty:
							'opacity, transform, -webkit-transform',
						opacity: 1,
						transform: 'translateZ(0px) scale(1)',
						background:
							'url("imgs/landing-help.jpg") center center / cover no-repeat fixed',
						backgroundColor: 'initial',
						height: '100vh',
						paddingTop: '5vh',
					}}
				>
					<div
						className='mask rgba-black-strong'
						style={{ boxSizing: 'border-box' }}
					>
						<div
							className='container-fluid d-flex align-items-center justify-content-center h-100'
							style={{
								boxSizing: 'border-box',
								width: '100%',
								paddingRight: '15px',
								paddingLeft: '15px',
								marginRight: 'auto',
								marginLeft: 'auto',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								height: '100%',
							}}
						>
							<div
								className='row d-flex justify-content-center text-center'
								style={{
									boxSizing: 'border-box',
									flexWrap: 'wrap',
									marginRight: '-15px',
									marginLeft: '-15px',
									display: 'flex',
									justifyContent: 'center',
									textAlign: 'center',
								}}
							>
								<div
									id='abtlandingimg-text'
									className='col-md-10 align-middle aos-init aos-animate'
									style={{
										boxSizing: 'border-box',
										position: 'relative',
										width: '100%',
										paddingRight: '15px',
										paddingLeft: '15px',
										flex: '0 0 83.3333%',
										maxWidth: '83.3333%',
										pointerEvents: 'auto',
										transitionTimingFunction: 'ease',
										transitionDuration: '1s',
										transitionProperty:
											'opacity, transform, -webkit-transform',
										opacity: 1,
										transform: 'translateZ(0px) scale(1)',
										marginTop: '18vh',
										verticalAlign: 'middle',
									}}
								>
									<h2
										className='display-4 font-weight-bold pt-5 mb-5 text-center'
										style={{
											boxSizing: 'border-box',
											marginTop: '0px',
											fontSize: '3.5rem',
											lineHeight: 1.2,
											marginBottom: '3rem',
											paddingTop: '3rem',
											textAlign: 'center',
											fontWeight: 700,
										}}
									>
										Help US!
									</h2>
									<h4
										style={{
											boxSizing: 'border-box',
											marginTop: '0px',
											marginBottom: '0.5rem',
											fontWeight: 500,
											lineHeight: 1.2,
											fontSize: '1.5rem',
										}}
									>
										Donate and Serve Your Community
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
            </section>
            <HelpBottom/>
			
		</>
	)
}

export default Help
