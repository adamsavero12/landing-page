import './index.css'
import './App.css'
import introduction1 from './images/introduction-1.jpg';
import introduction2 from './images/introduction-2.jpg';
import introduction3 from './images/introduction-3.jpg';
import introduction4 from './images/introduction-4.jpg';
import one from './images/start-1.jpg';
import two from './images/start-2.jpg';
import three from './images/start-3.jpg';
import arrow from './images/arrow.png';

 function Body() {
    return (
        <>
            <div class="main-content">
                <div className="main1 flex justify-center bg-slate-100">
                    <span className='flex p-2 pl-14 text-zinc-700'><a href="" className='text-biru'>Explore Cisco</a>
                </span>
                </div>
                <div className="main2 flex justify-center">
                <div className="flex bg-[#005073] text-white w-[800px] mb-1">
                <div className="relative flex flex-col ml-[60px] mt-[20px] max-w-[600px]">
                    <p className="text-[40px] mb-[10px] mt-[30px]">Cisco Packet Tracer</p>
                    <p className="text-[17px] mt-[20px] leading-[1.5]">
                        Gain real skills with our powerful network simulation tool where you practice networking, IoT, and cybersecurity skills in a virtual lab – no hardware needed!
                    </p>
                    <p className="text-[17px]  mt-[20px]">
                        Download Packet Tracer when you enroll in one of the three self-paced Packet Tracer Courses.
                    </p>
                    <div className="mt-[40px]">
                        <a href="" className="text-[#58585b] bg-white no-underline px-[35px] py-[10px] border border-transparent shadow-[inset_0_0_0_1px_transparent] rounded-full hover:bg-[#eee]">
                            View courses
                        </a>
                    </div>
                </div>
                </div>
                <div className="mr-[20px]">
                <iframe
                    width="770"
                    height="470"
                    src="https://www.youtube.com/embed/M66J7oRU400?si=vEd9nX5FvF7_1DFC"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                </div>
                </div>
                <div className="main3">
                    <div className="flex justify-center text-[30px] tracking-wide mb-6 mt-[30px]">
                        <p>Introduction</p>
                    </div>
                    <div className="flex gap-[25px] justify-center mr-[20px] mb-[20px]">
                        <div className="relative max-w-[348px]">
                        <img src={introduction1} alt="" className="w-[360px] h-[140px]" />
                        <p className="text-[20px] mt-[15px] mb-[15px]">Who uses Packet Tracer?</p>
                        <ul className="mt-[-10px]">
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Learners exploring networking and tech careers
                            </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Networking, IoT, and cybersecurity students
                            </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                             Engineers, educators, and trainers
                           </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Distance teaching and learning
                           </li>
                        </ul>
                        </div>
    
                        <div className=" max-w-[348px]">
                        <img src={introduction2} alt="" className="w-[360px] h-[140px]" />
                        <p className="text-[20px] mt-[15px] mb-[15px]">Use it to</p>
                        <ul className="mt-[-10px]">
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                             Practice building simple and complex networks
                            </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Visualize how a network works
                            </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Practice rack, stack, and cabling skills in the virtual lab
                            </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Integrate IoT devices, Python code, or network automation
                            </li>
                        </ul>
                    </div>
    
                        <div className="relative max-w-[348px]">
                        <img src={introduction3} alt="" className="w-[360px] h-[140px]" />
                        <p className="text-[20px] mt-[15px] mb-[15px]">Download for Free</p>
                        <div className="text-[14px] text-[#58585b] leading-[1.5] mt-[-10px]">
                            <span>Simply enroll in one of our introductory courses below to download the latest version of Packet Tracer.</span>
                        </div>
                        </div>
    
                        <div className="relative max-w-[348px]">
                        <img src={introduction4} alt="" className="w-[360px] h-[140px]" />
                        <p className="text-[20px] mt-[15px] mb-[15px]">Community</p>
                        <ul className="mt-[-10px]">
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Collaborate and compete within Packet Tracer
                         </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Share network designs for feedback
                            </li>
                            <li className="text-[14px] text-[#58585b] leading-[1.5]">
                                Connect with our global Facebook community to share ideas and get inspiration
                         </li>
                        </ul>
                        </div>
                    </div>
    
                </div>
                <div className="main4">
                    <div className="bg-[#e8ebf1] mr-[20px] pb-[80px]">
                        <div className="flex flex-col items-center">
                          <div className="text-[32px] mt-[15px]">Download and Get Started</div>
                          <div className="text-center max-w-[850px] mt-[10px]">
                            <div className="text-[18px] leading-[1.5]">
                              Cisco Packet Tracer is a powerful tool. Let us help you get started. Select the course that’s right for you to learn valuable tips and best practices and download the latest version of Packet Tracer for free.
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center gap-[15px] mr-[-20px] mt-[40px]">
                          <div className="max-w-[480px]">
                            <img src={one} alt="" className="w-[470px] h-[135px]" />
                            <p className="text-[24px] mt-[8px]">Getting Started with Cisco Packet Tracer</p>
                            <p className="italic text-[13px] mb-[10px]">2 hours</p>
                            <p className="text-[14px] leading-[1.5]">
                              This short on-ramp is a great place to start and showcases the latest Packet Tracer user interface. Sign up below and you will be directed to the self-paced course in our new learner experience on <a href="" className="text-[#035c7c] hover:text-[#017CAD]">SkillsForAll.com.</a>
                            </p>
                            <div className="mt-[20px]">
                              <a href="" className="text-[#212529] bg-[#6abf4b] no-underline py-[7px] px-[20px] text-[14px] rounded-[20px] border border-transparent hover:bg-[#7ce04e]">View course</a>
                            </div>
                          </div>
                          <div className="max-w-[480px]">
                            <img src={two} alt="" className="w-[470px] h-[135px]" />
                            <p className="text-[24px] mt-[8px]">Exploring Networking with Cisco Packet Tracer</p>
                            <p className="italic text-[13px] mb-[10px] ">3 hours</p>
                            <p className="text-[14px] leading-[1.5]">
                              Once you finish the Getting Started course, jump in and explore how Packet Tracer can help you learn networking. Practice using Cisco Packet Tracer to set up, manage, and monitor a small office network in this interactive course.
                            </p>
                            <div className="mt-[20px]">
                              <a href="" className="text-[#212529] bg-[#6abf4b] no-underline py-[7px] px-[20px] text-[14px] rounded-[20px] border border-transparent hover:bg-[#7ce04e]">View course</a>
                            </div>
                          </div>
                          <div className="max-w-[480px]">
                            <img src={three} alt="" className="w-[470px] h-[135px]" />
                            <p className="text-[24px] mt-[8px]">Exploring Internet of Things with Cisco Packet Tracer</p>
                            <p className="italic text-[13px] mb-[10px]">3 hours</p>
                            <p className="text-[14px] leading-[1.5]">
                              Expand your Cisco Packet Tracer skills with Internet of Things (IoT). Learn how to add and configure IoT devices in Packet Tracer and create your own smart home network.
                            </p>
                            <div className="mt-[20px]">
                              <a href="" className="text-[#212529] bg-[#6abf4b] no-underline py-[7px] px-[20px] text-[14px] rounded-[20px] border border-transparent hover:bg-[#7ce04e]">View course</a>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="main5">
                    <div className="main5 flex justify-center gap-[30px] mt-[38px] mb-[30px] mr-[20px]">
                        <div className="kotak flex bg-[#0377a1] p-[29px] w-[700px] hover:cursor-pointer">
                          <div className="contain text-white mr-[-10px] mt-[-10px] mb-[-10px]">
                            <div className="judul">
                              <p className="text-[32px]">Teaching with Packet Tracer</p>
                            </div>
                            <div className="subjudul">
                              <p className="text-[16px]">Discover how Packet Tracer helps instructors teach complex networking concepts.</p>
                            </div>
                            <div className="bawah flex justify-center gap-[530px] mt-[27px]">
                              <div className="link">
                                <a href="" className="text-white">Learn More</a>
                              </div>
                              <div className="gambar flex">
                                <img src={arrow} alt="" className="h-[32px] w-[32px]" />
                              </div>
                            </div>
                          </div>
                        </div>
        
                        <div className="kotak flex bg-[#0377a1] p-[29px] max-w-[800px] w-[700px] hover:cursor-pointer">
                          <div className="contain text-white mr-[-10px] mt-[-10px] mb-[-10px]">
                            <div className="judul">
                              <p className="text-[32px]">Packet Tracer FAQs</p>
                            </div>
                            <div className="subjudul">
                              <p className="text-[16px]">Still have questions? Get the answers to users most common questions</p>
                            </div>
                            <div className="bawah2 flex justify-center gap-[575px] mt-[27px]">
                              <div className="link">
                                <a href="" className="text-white">Read</a>
                              </div>
                              <div className="gambar flex">
                                <img src={arrow} alt="" className="h-[32px] w-[32px]" />
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Body;