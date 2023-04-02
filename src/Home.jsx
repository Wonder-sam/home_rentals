import bigHouse from './assets/bigHouse.png'
import map from './assets/ma.png'
import house1 from './assets/house1.png'
import hello from './assets/hello.jpg'
import fb from './assets/fb.svg'
import gram from './assets/gram.svg'
import lin from './assets/lin.svg'
import print from './assets/print.svg'
import loc from './assets/loc.svg'
import phone from './assets/phone.svg'
import tube from './assets/tube.svg'
import gplus from './assets/gplus.svg'
import pin from './assets/pin.svg'
import rss from './assets/rss.svg'
import twit from './assets/twit.svg'
import quote from './assets/quote.svg'
import play from './assets/play.svg'
import user from './assets/user.png'
import logoCol from './assets/logoCol.png'
import { flexible, properties } from './homeData'
import { useDropzone } from 'react-dropzone';
import { useCallback, useMemo } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css'

const baseStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#F4511E',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#000000',
    transition: 'border .3s ease-in-out'
  };

function Home(){
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);
    
    const {
        getRootProps,
        getInputProps
      } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png, image/jpg'
    });

    const style = useMemo(() => ({
        ...baseStyle,
      }),[]);

    return(
        <>
        <div className='relative w-full h-[100vh] md:h-[110vw] lg:h-[100vh]'>
            <div className='absolute bg-[rgba(0,0,0,0.4)] w-[100%] h-[100%] z-[1]'></div>
            <img alt="quote" src={bigHouse} className="absolute object-cover h-full w-full" />
            <div className='absolute z-[2] flex flex-col lg:flex-row items-center justify-around left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] items-center w-[100%]'>
                <p className='text-white font-bold text-[200%] w-[80%] lg:w-[30%] ml-[5%] capitalize text-center lg:text-left'>
                    The Most Affortable Place To Stay In the san franciso bay area
                </p>
                <div className ="w-[90%] md:w-[80%] lg:w-[40%] flex flex-col items-center lg:block mt-8 lg:mt-0">
                    <div className='w-[80%] md:w-[75%] bg-white p-0 rounded-2xl overflow-hidden mb-[3%]'>
                        <img alt="quote" src={map} className="object-contain w-full" />
                    </div>
                    <div className='flex items-center justify-center border box-border border-solid border-[rgba(0,0,0,0.2)] rounded-xl p-2 bg-white w-[90%] md:w-[75%]'>
                        <select className='p-2 md:p-4 border box-border border-solid border-[rgba(0,0,0,0.2)] rounded-l-lg'>
                            <option>All Type</option>
                        </select>
                        <select className='p-2 md:p-4 border box-border border-solid border-[rgba(0,0,0,0.2)]'>
                            <option>Neighborhood</option>
                        </select>
                        <button className='bg-[#23A6F0] object-cover h-full aspect-square w-[15%] flex justify-center items-center  rounded-r-lg'>
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.9901 10.3188L16.2939 14.6226C16.4452 14.7739 16.5301 14.9792 16.53 15.1932C16.53 15.4072 16.4449 15.6124 16.2935 15.7637C16.1421 15.915 15.9368 15.9999 15.7228 15.9998C15.5088 15.9998 15.3036 15.9147 15.1523 15.7633L10.8485 11.4595C9.56197 12.456 7.9441 12.9249 6.32406 12.7709C4.70401 12.6169 3.20349 11.8515 2.12774 10.6304C1.05199 9.40936 0.481819 7.82433 0.533226 6.19779C0.584633 4.57125 1.25375 3.02539 2.40446 1.87468C3.55517 0.723966 5.10104 0.0548478 6.72757 0.00344105C8.35411 -0.0479657 9.93914 0.522201 11.1602 1.59795C12.3813 2.6737 13.1467 4.17423 13.3007 5.79427C13.4547 7.41432 12.9858 9.03219 11.9893 10.3188H11.9901ZM6.93033 11.1995C8.20331 11.1995 9.42415 10.6938 10.3243 9.7937C11.2244 8.89356 11.7301 7.67272 11.7301 6.39974C11.7301 5.12676 11.2244 3.90592 10.3243 3.00579C9.42415 2.10565 8.20331 1.59997 6.93033 1.59997C5.65735 1.59997 4.43651 2.10565 3.53637 3.00579C2.63624 3.90592 2.13055 5.12676 2.13055 6.39974C2.13055 7.67272 2.63624 8.89356 3.53637 9.7937C4.43651 10.6938 5.65735 11.1995 6.93033 11.1995Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='lg:p-[5%]'>
            <div className='mb-4 pl-[5%] pt-[5%] lg:pl-0 lg:pt-[5%] mb-8 md:mb-11'>
                <p className='underline inline-block capitalize text-xl lg:text-3xl font-bold underline-offset-8 decoration-[#F4511E]'>minimum living cost </p>
                <div className='w-[0.4%] inline-block lg:text-3xl'></div>
                <p className='inline-block capitalize text-xl lg:text-3xl font-bold'>takes care of everything</p>
            </div>
            <div className='relative flex w-full flex-col lg:flex-row justify-between items-center'>
                <div className='lg:hidden absolute top-0 w-full h-full bg-[rgba(0,0,0,0.65)]'/>
                <div className='w-full lg:w-[35%] rounded-tl-[11%] rounded-br-[11%] overflow-hidden'>
                    <img alt="house" src={house1} width='100%' className="w-[100vw] aspect-square md:aspect-video lg:aspect-auto object-fill" />
                </div>
                <div className='box-border text-sm md:text-base absolute top-[50%] left-[50%] p-[5%] lg:p-0 -translate-x-[50%] text-white lg:text-black -translate-y-[50%] lg:translate-y-[0%] lg:translate-x-[0%] lg:static grid grid-cols-3 w-[100%] md:w-[80%] aspect-square md:aspect-auto lg:w-[60%] gap-y-10 md:gap-y-20'>
                    <div className='w-[90%] lg:w-[75%]'>
                        <div className='mb-4 flex justify-center items-center bg-white p-2 drop-shadow-xl rounded-md aspect-square w-[50%]'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                            </svg>
                        </div>
                        <p className='capitalize font-bold'>Pay as little</p>
                        <p className='capitalize font-bold'>as possible!</p>
                    </div>

                    <div className='w-[90%] lg:w-[75%]'>
                        <div className='mb-4 flex justify-center items-center bg-white p-2 drop-shadow-xl rounded-md aspect-square w-[50%]'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                            </svg>
                        </div>
                        <p className='capitalize font-bold'>Enjoy wisdom</p>
                        <p className='capitalize font-bold'>of community!</p>
                    </div>

                    <div className='w-[90%] lg:w-[75%]'>
                        <div className='mb-4 flex justify-center items-center bg-white p-2 drop-shadow-xl rounded-md aspect-square w-[50%]'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                            </svg>
                        </div>
                        <p className='capitalize font-bold'>Let's somebody else</p>
                        <p className='capitalize font-bold'>take care of Landlord!</p>
                    </div>

                    <div className='w-[90%] lg:w-[75%]'>
                        <div className='mb-4 flex justify-center items-center bg-white p-2 drop-shadow-xl rounded-md aspect-square w-[50%]'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                            </svg>
                        </div>
                        <p className='capitalize font-bold'>Enjoy peaceful</p>
                        <p className='capitalize font-bold'>Environment!</p>
                    </div>

                    <div className='w-[90%] lg:w-[75%]'>
                        <div className='mb-4 flex justify-center items-center bg-white p-2 drop-shadow-xl rounded-md aspect-square w-[50%]'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                            </svg>
                        </div>
                        <p className='capitalize font-bold'>Stay Safe!</p>
                        <p className='capitalize font-bold'>Save Money!</p>
                    </div>

                    <div className='w-[90%] lg:w-[75%]'>
                        <div className='mb-4 flex justify-center items-center bg-white p-2 drop-shadow-xl rounded-md aspect-square w-[50%]'>
                            <svg width="39" height="39" viewBox="0 0 39 39" fill="none">
                                <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                            </svg>
                        </div>
                        <p className='capitalize font-bold'>Pay for what </p>
                        <p className='capitalize font-bold'>you use !</p>
                    </div>

                </div>
            </div>
        </div>
        <div className='p-[5%] w-full bg-[#F5F5F5] flex flex-col'>
            <div className='flex justify-between items-center mb-6'>
                <div className='mb-4 w-[70%]'>
                    <p className='underline inline-block capitalize  text-xl lg:text-[36px] font-bold underline-offset-8 decoration-[#F4511E]'>List</p>
                    <div className='w-[1%] inline-block text-[36px]'></div>
                    <p className='inline-block capitalize text-xl lg:text-[36px] font-bold'>of properties</p>
                </div>
                <button className='bg-[#F4511E] p-2 lg:p-4 rounded'>
                    <p className='capitalize'>View all <span className='hidden lg:inline-block'>property</span></p>
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 lg:gap-y-20 w-full justify-items-stretch mb-16">
                {
                    properties.map((prop, index)=>(
                        
                    <div className=' bg-white border border-[#979797] rounded-[28px] drop-shadow-xl' key={index}>
                        <img alt="quote" src={prop.img} className="object-cover w-full" />
                        <div className='p-6'>
                            <p className='font-bold text-xl capitalize'>{prop.loc}</p>
                            <p className='text-[#818181] mt-4 text-lg'>{prop.type}</p>
                            <p className='font-bold text-[#F4511E] text-2xl'>{prop.price}</p>
                        </div>
                        <div className='grid grid-cols-3 items-center w-full justify-center border-t'>
                            <div className='flex items-center justify-center border-r p-4'>
                                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.95859 1.61287H8.99068C9.93103 1.61373 10.7475 2.26078 10.9632 3.17607C10.9812 3.25237 11.0493 3.30631 11.1277 3.30649H14.2417C14.2866 3.30666 14.3297 3.28893 14.3615 3.25723C14.3934 3.22554 14.4112 3.18247 14.4112 3.13756V1.44333C14.4112 1.08398 14.2685 0.739356 14.0143 0.485316C13.7601 0.231277 13.4155 0.0886415 13.0561 0.0888063H2.89317C2.53382 0.0886415 2.18913 0.231277 1.93497 0.485316C1.68082 0.739356 1.53802 1.08398 1.53802 1.44333V3.13756C1.53802 3.18247 1.55591 3.22554 1.58772 3.25723C1.61954 3.28893 1.66266 3.30666 1.70757 3.30649H4.82154C4.90012 3.30677 4.96843 3.25263 4.98612 3.17607C5.20177 2.26078 6.01824 1.61373 6.95859 1.61287Z" fill="black"/>
                                    <path d="M1.19954 4.32312C1.01979 4.32296 0.847352 4.39429 0.720247 4.52139C0.593142 4.6485 0.521808 4.82094 0.521973 5.00069V8.55747C0.521972 8.8795 0.748624 9.15703 1.06415 9.22138C1.14288 9.23757 1.19943 9.30682 1.19954 9.3872V10.7591C1.19954 11.1333 1.5029 11.4367 1.87711 11.4367C2.25133 11.4367 2.55468 11.1333 2.55468 10.7591V9.40459C2.55452 9.35968 2.57224 9.31655 2.60394 9.28474C2.63564 9.25292 2.6787 9.23504 2.72361 9.23504H13.2256C13.2706 9.23504 13.3136 9.25292 13.3453 9.28474C13.377 9.31655 13.3947 9.35968 13.3946 9.40459V10.7591C13.3946 11.1333 13.6979 11.4367 14.0721 11.4367C14.4464 11.4367 14.7497 11.1333 14.7497 10.7591V9.3872C14.7498 9.30682 14.8064 9.23757 14.8851 9.22138C15.2006 9.15703 15.4273 8.8795 15.4273 8.55747V5.00069C15.4275 4.82094 15.3561 4.6485 15.229 4.52139C15.1019 4.39429 14.9295 4.32296 14.7497 4.32312H1.19954Z" fill="black"/>
                                </svg>
                                <p className='ml-2 font-bold'>4</p>
                            </div>
                            <div className='flex items-center justify-center p-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17.0247 10.2949C17.221 10.2963 17.4082 10.3785 17.5421 10.522C17.6764 10.6628 17.7461 10.8531 17.7345 11.0473C17.5212 14.6112 14.5689 17.3923 10.9987 17.3927H7.4356C3.86533 17.3923 0.913099 14.6112 0.699814 11.0473C0.690463 10.8535 0.759541 10.6642 0.891454 10.522C1.02445 10.3767 1.21259 10.2942 1.40959 10.2949H3.97756C4.13406 10.2964 4.27305 10.1952 4.31968 10.0458C4.50504 9.45635 5.05037 9.05452 5.66825 9.05208H9.22068C9.83856 9.05452 10.3839 9.45635 10.5693 10.0458C10.6155 10.1939 10.7526 10.2948 10.9078 10.2949H14.7172C14.9132 10.2949 15.0721 10.136 15.0721 9.94001V2.48736C15.0729 2.20686 14.9084 1.9522 14.6524 1.83756C14.3964 1.72291 14.0969 1.76978 13.8882 1.95715L13.5972 2.24816C13.5025 2.34353 13.4698 2.48421 13.5127 2.61157C13.7602 3.34256 13.5724 4.15066 13.0279 4.6976L12.886 4.84311C12.6088 5.12019 12.1595 5.12019 11.8823 4.84311L10.005 2.96504C9.7279 2.68787 9.7279 2.23858 10.005 1.96141L10.1505 1.81591C10.7039 1.28721 11.503 1.1051 12.2308 1.34178C12.3573 1.38194 12.4955 1.34827 12.5893 1.25448L12.9179 0.925849C13.5389 0.35201 14.4406 0.199975 15.2154 0.538463C15.9903 0.876951 16.4914 1.64182 16.4923 2.48736V9.94001C16.4923 10.136 16.6512 10.2949 16.8472 10.2949H17.0247ZM8.8623 14.731C9.0583 14.731 9.21719 14.5722 9.21719 14.3762V10.8273C9.21719 10.6313 9.0583 10.4724 8.8623 10.4724H6.0232C5.8272 10.4724 5.66831 10.6313 5.66831 10.8273V14.3762C5.66831 14.5722 5.8272 14.731 6.0232 14.731H8.8623Z" fill="black"/>
                                    <path d="M7.08789 4.67918C7.19037 4.68008 7.29183 4.65877 7.38529 4.61672L8.67424 4.02193C8.90487 3.91606 9.0615 3.69519 9.08513 3.44253C9.10876 3.18986 8.9958 2.94378 8.7888 2.79699C8.5818 2.65019 8.31221 2.62498 8.08158 2.73085L6.79049 3.32493C6.48782 3.46459 6.32311 3.79606 6.39461 4.12165C6.46611 4.44723 6.75455 4.67919 7.08789 4.67918Z" fill="black"/>
                                    <path d="M10.7233 8.52695C11.0838 8.68072 11.5006 8.51327 11.6545 8.1529L12.2124 6.84691C12.3563 6.48868 12.1875 6.08115 11.8324 5.92959C11.4774 5.77803 11.0663 5.93803 10.9071 6.28974L10.3528 7.59786C10.2 7.95675 10.3655 8.37167 10.7233 8.52695Z" fill="black"/>
                                    <path d="M8.14258 6.80016C8.41838 7.07862 8.86767 7.08084 9.14621 6.80513L10.1555 5.80718C10.4265 5.53027 10.4254 5.0872 10.153 4.81169C9.88055 4.53617 9.43752 4.53003 9.15756 4.79788L8.14826 5.79653C7.8696 6.07213 7.86706 6.52143 8.14258 6.80016Z" fill="black"/>
                                </svg>
                                <p className='ml-2 font-bold'>2</p>
                            </div>
                            <div className='flex items-center border-l justify-center p-4'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" >
                                    <path d="M5.65201 3.61685C6.04401 3.61685 6.36178 3.29907 6.36178 2.90707V1.13263C6.36178 0.740629 6.04401 0.422852 5.65201 0.422852C5.26001 0.422852 4.94223 0.740629 4.94223 1.13263V2.90707C4.94223 3.29907 5.26001 3.61685 5.65201 3.61685Z" fill="black"/>
                                    <path d="M3.87759 5.39123C3.87759 4.99924 3.55981 4.68146 3.16781 4.68146H1.39337C1.00137 4.68146 0.683594 4.99924 0.683594 5.39123C0.683594 5.78323 1.00137 6.10101 1.39337 6.10101H3.16781C3.55981 6.10101 3.87759 5.78323 3.87759 5.39123Z" fill="black"/>
                                    <path d="M3.16781 11.7794H1.39337C1.00137 11.7794 0.683594 12.0971 0.683594 12.4891C0.683594 12.8811 1.00137 13.1989 1.39337 13.1989H3.16781C3.55981 13.1989 3.87759 12.8811 3.87759 12.4891C3.87759 12.0971 3.55981 11.7794 3.16781 11.7794Z" fill="black"/>
                                    <path d="M12.7498 0.422852C12.3578 0.422852 12.04 0.740629 12.04 1.13263V2.90707C12.04 3.29907 12.3578 3.61685 12.7498 3.61685C13.1418 3.61685 13.4596 3.29907 13.4596 2.90707V1.13263C13.4596 0.740629 13.1418 0.422852 12.7498 0.422852Z" fill="black"/>
                                    <path d="M5.65201 14.2635C5.26001 14.2635 4.94223 14.5813 4.94223 14.9733V16.7478C4.94223 17.1398 5.26001 17.4575 5.65201 17.4575C6.04401 17.4575 6.36178 17.1398 6.36178 16.7478V14.9733C6.36178 14.5813 6.04401 14.2635 5.65201 14.2635Z" fill="black"/>
                                    <path d="M12.7498 14.2635C12.3578 14.2635 12.04 14.5813 12.04 14.9733V16.7478C12.04 17.1398 12.3578 17.4575 12.7498 17.4575C13.1418 17.4575 13.4596 17.1398 13.4596 16.7478V14.9733C13.4596 14.5813 13.1418 14.2635 12.7498 14.2635Z" fill="black"/>
                                    <path d="M15.234 6.10101H17.0085C17.4005 6.10101 17.7183 5.78323 17.7183 5.39123C17.7183 4.99924 17.4005 4.68146 17.0085 4.68146H15.234C14.842 4.68146 14.5243 4.99924 14.5243 5.39123C14.5243 5.78323 14.842 6.10101 15.234 6.10101Z" fill="black"/>
                                    <path d="M17.0085 11.7794H15.234C14.842 11.7794 14.5243 12.0971 14.5243 12.4891C14.5243 12.8811 14.842 13.1989 15.234 13.1989H17.0085C17.4005 13.1989 17.7183 12.8811 17.7183 12.4891C17.7183 12.0971 17.4005 11.7794 17.0085 11.7794Z" fill="black"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.7498 4.68146C13.1418 4.68146 13.4596 4.99924 13.4596 5.39123V12.489C13.4596 12.881 13.1418 13.1988 12.7498 13.1988H5.65201C5.26001 13.1988 4.94223 12.881 4.94223 12.489V5.39123C4.94223 4.99924 5.26001 4.68146 5.65201 4.68146H12.7498ZM11.6851 11.7791C11.8811 11.7791 12.04 11.6202 12.04 11.4242V6.4558C12.04 6.2598 11.8811 6.10091 11.6851 6.10091H6.71663C6.52063 6.10091 6.36174 6.2598 6.36174 6.4558V11.4242C6.36174 11.6202 6.52063 11.7791 6.71663 11.7791H11.6851Z" fill="black"/>
                                </svg>
                                <p className='ml-2 font-bold'>2</p>
                            </div>
                        </div>
                    </div>
                    ))
                }
                
            </div>
            <div className='rounded-xl border border-[#BDBDBD] overflow-hidden w-fit self-center'>
                <button className='p-4 lg:p-6 bg-[#F3F3F3]'>
                    <p>First</p>
                </button>
                <button className='p-4 lg:p-6 bg-[#FFFFFF] border-r border-[#BDBDBD]'>
                    <p>1</p>
                </button>
                <button className='p-4 lg:p-6 bg-[#F4511E] border-r border-[#BDBDBD]'>
                    <p>2</p>
                </button>
                <button className='p-4 lg:p-6 bg-[#FFFFFF] border-r border-[#BDBDBD]'>
                    <p>3</p>
                </button>
                <button className='p-4 lg:p-6 bg-[#FFFFFF]'>
                    <p>Next</p>
                </button>
            </div>
        </div>
        <div className='w-full bg-[#FFFFFF] flex flex-col lg:flex-row p-[5%] items-center justify-start'>
            <div className='w-[100%] md:w-[90%] lg:w-[50%]'>
                <div className='grid grid-cols-2 items-end mb-4 justify-items-center'>
                    {
                        flexible.map((flex, index)=>(
                            index<=1?
                            <div key={index} className={index===0?'relative rounded-xl w-[90%] md:w-[80%] lg:w-[70%]':'relative rounded-xl w-[90%] md:w-[80%] lg:w-[70%] ml-[-5%] md:ml-[-35%] lg:ml-[-45%]'}>
                                <img alt="quote" src={flex.img} />
                                <p className='w-[70%] text-center text-sm capitalize text-white font-bold absolute top-4 left-[50%] translate-x-[-50%]'>{flex.title}</p>
                            </div>
                            : undefined
                        ))
                    }
                </div>
                <div className='grid grid-cols-2 justify-items-center'>
                    {
                        flexible.map((flex, index)=>(
                            index>=2?
                            <div key={index} className={index===2?'relative rounded-xl w-[80%] md:w-[70%] lg:w-[60%] ml-0 md:ml-[10%] lg:ml-[-10%]': "relative rounded-xl w-[90%] ml-[-5%] md:ml-[-30%] lg:ml-[-45%] "}>
                                <img alt="quote" src={flex.img} />
                                <p className='w-[70%] text-center text-sm capitalize text-white font-bold absolute top-4 left-[50%] translate-x-[-50%]'>{flex.title}</p>
                            </div>
                            : undefined
                        ))
                    }
                </div>
            </div>
            <div className='w-full lg:w-[40%] flex lg:block flex-col align-center mt-4 lg:mt-0'>
                <p className='w-full lg:w-[70%] font-bold text-3xl mb-4 leading-10'>
                    Flexibility and options to suit your lifestyle.
                </p>
                <p className='w-full lg:w-[70%] text-sm leading-6 mb-4'>
                    You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness 
                    guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.
                </p>
                <button className='px-6 py-4 bg-[#F4511E] rounded-xl'>
                    <p className='text-white text-sm'>Search Rooms</p>
                </button>
            </div>
        </div>
        <div className='p-[5%] flex flex-col items-center font-medium w-full'>
            <p className='mb-6 text-small md:text-base text-center'>Your property with us and be Confident that Your Room will be Filled Out!</p>
            <div className='flex flex-col items-center w-full lg:w-[80%] drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] bg-white rounded-xl p-6'>
                <p className='text-[#F4511E] font-bold text-xl mb-10'>Add A New Property</p>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 font-normal mb-10'>
                    <div className='flex flex-col font-semibold'>
                        <label>Name<span className='text-[#F4511E]'> *</span></label>
                        <input type='text' name='name' placeholder="Enter Name" className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <label>Address<span className='text-[#F4511E]'> *</span></label>
                        <input type='text' name='address' placeholder="Enter Address" className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <label>Unit Number<span className='text-[#F4511E]'> *</span></label>
                        <input type='text' name='unit' placeholder="Enter Unit" className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <label>City<span className='text-[#F4511E]'> *</span></label>
                        <select className='bg-[#F9F9F9] p-2 text-[#737373] rounded-md placeholder:font-normal border border-[#E6E6E6]'>
                            <option>Select City</option>
                        </select>
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <label>State<span className='text-[#F4511E]'> *</span></label>
                        <input type='text' name='state' placeholder="Enter Name" className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <label>Room Type <span className='text-[#F4511E]'> *</span></label>
                        <input type='text' name='room' placeholder="Enter Name" className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6] border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold'>
                        <label>Price <span className='text-[#F4511E]'> *</span></label>
                        <input type='text' name='price' placeholder="Enter Price" className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold col-span-full'>
                        <label>Description <span className='text-[#F4511E]'> *</span></label>
                        <textarea name='desc' placeholder='Enter Description' rows={5} className='bg-[#F9F9F9] p-2 rounded-md placeholder:font-normal border border-[#E6E6E6]'/>
                    </div>
                    <div className='flex flex-col font-semibold col-span-full'>
                        <label>Upload Photos</label>
                        <div {...getRootProps({style})}>
                            <input {...getInputProps()} />
                            <p className='font-medium'>Drag your images here, or <span className='text-[#F4511E] hover:cursor-pointer'>browse</span></p>
                            <p className='text-sm text-[rgba(0,0,0,0.5)]'>Supported:  JPG, JPEG, PNG</p>
                        </div>
                    </div>
                </div>
                <button className='bg-[#F4511E] py-4 px-4 w-fit rounded-lg'>
                    <p className='text-white'>Add New Property</p>
                </button>
            </div>
        </div>
        <div className='w-full'>
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                [1,1,1].map((swip, index)=>(
                    <SwiperSlide key={index}>
                        <div className='flex flex-col lg:flex-row items-center bg-[rgba(244,81,30,0.07)] w-full'>
                            <div className='w-full lg:w-[60%]'>
                                <div className='relative flex flex-col items-center justify-center'>
                                    <p className='w-[80%] lg:w-[60%] leading-8 mb-4 mt-10'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, 
                                        a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur 
                                        ac nec justo. Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed 
                                        risus a lacus fringilla finibus.
                                    </p>
                                    <img alt="quote" src={quote} className="absolute top-[2%] left-[13%] opacity-[0.3] "/>
                                    
                                    <div className='w-[80%] lg:w-[60%] flex justify-start items-center mb-20'>
                                        <div className='w-[15%] aspect-square rounded-full mr-2 overflow-hidden'>
                                            <img alt="user" src={user} className="w-full object-cover" />
                                        </div>
                                        <div className='w-full'>
                                            <p className='text-[#F4511E] font-bold'>Harry Wilson</p>
                                            <p>Property Owner</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-[40%] relative'>
                                <img alt="quote" src={hello} className="object-cover w-full" />
                                <div className='absolute z-[1] top-0  left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]'></div>
                                <img alt="play icon" src={play} className="absolute left-[50%] top-[50%] z-[2] -translate-x-[50%] -translate-y-[50%]" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>

        <div className='flex flex-col px-[10%] py-[5%] w-full'>
            <div className='h-[2px] w-full bg-[#F4511E] mt-14'></div>
            <div className='flex flex-col lg:flex-row py-[5%]'>
                <div className='w-full lg:w-[50%] flex justify-center items-center mb-4 lg:mb-0'>
                    <img alt="logo" src={logoCol} />
                </div>
                <div className='w-full lg:w-[50%]'>
                    <div className='w-full lg:w-[75%] grid grid-cols-2 gap-y-4 justify-items-stretch mb-4'>
                        <p className='text-[80%] text-[#0A142F] col-span-2'><img alt="quote" src={loc} className="inline-block mr-4" />345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
                        <p className='text-[80%] text-[#0A142F]'><img alt="quote" src={phone} className="inline-block mr-4" />(123) 456-7890</p>
                        <p className='text-[80%] text-[#0A142F]'><img alt="quote" src={print} className="inline-block mr-4" />(123) 456-7890</p>
                    </div>
                    <div className='flex items-center justify-between w-full lg:w-[65%]'>
                        <p className='text-[80%] text-[#0A142F] opacity-[0.5]'>Social Media</p>
                        <img alt="fb icon" src={fb} />
                        <img alt="twitter icon" src={twit} />
                        <img alt="linked in" src={lin} />
                        <img alt="youtube" src={tube} />
                        <img alt="instagram" src={gram} />
                        <img alt="google_plus" src={gplus} />
                        <img alt="pintrest" src={pin} />
                        <img alt="RSS" src={rss} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row items-center'>
                <ul className='flex flex-col lg:flex-row w-full lg:w-[50%] justify-evenly leading-[3em] lg:leading-auto'>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>HELP</li>
                    <li>PRIVACY POLICY</li>
                    <li>DISCLAIMER</li>
                </ul>
                <p className='text-[90%] text-[#0A142F] opacity-[0.5] text-center'>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
            </div>
        </div>
        </>
        
    )
}

export default Home;