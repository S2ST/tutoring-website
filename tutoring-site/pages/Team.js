import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Calendar.module.scss';
import { Grid } from '@mui/material';
import { useLanguageContext } from '../context/LangContext';

export default function Team() {
  const isEng = useLanguageContext().language;
  let calendarText = isEng ? 'Team' : '日历';

  return (
    <>
      <Head>
        <title>{calendarText}</title>
        <meta name="description" content="Students to Students Tutoring Website - Team" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <Navbar></Navbar>

      <section className="mt-20">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Our Team</h2>
            </div> 
            <div className="grid gap-8 mb-6 lg:mb-16 grid-cols-1">
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[70rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fanyuan_edited_2.jpg?alt=media&token=de9a89df-4619-4f48-a854-e205d31346e9" alt="Bonnie Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">{isEng ? 'Anyuan Tu' : '屠安元'}</a>
                        </h3>
                        <span className="text-gray-500">{isEng ? 'Founder & President' : '创始人兼总裁'}</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng ? 'Anyuan is an IB student at Merivale High School. An avid learner himself, Anyuan recognized the need for safe and affordable education during the COVID school shut down. He gathered a group and started tutoring local students while spreading the word on social media. Since then, he has recruited dozens of tutors from top universities and expanded our virtual community to include thousands of students across fifty countries. Anyuan hopes to continue spreading affordable education through S2S Tutoring for the years to come.' : 'Anyuan 是 Merivale 高中的 IB 学生。安元本人也是一名狂热的学习者，他认识到在新冠疫情学校关闭期间需要高质量且负担得起的教育。他召集了一群人，开始辅导当地学生，同时在社交媒体上传播信息。从那时起，他从顶尖大学招募了数十名导师，并将我们的虚拟社区扩大到包括来自五十个国家的数千名学生。安元希望在未来几年继续通过S2S辅导传播负担得起的教育。'} </p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[36rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Flinda_edited.png?alt=media&token=302defb1-5d38-4044-aec9-948e0bc5a3a6&_gl=1*1dv8ch2*_ga*MTQ4ODU4NDg0NC4xNjk5MDY5Nzg0*_ga_CW55HF8NVT*MTY5OTEzNzQ0MC4zLjEuMTY5OTEzNzUyNS42MC4wLjA." alt="Jese Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Linda Tang</a>
                        </h3>
                        <span className="text-gray-500">{isEng ? "Head Tutor" : '首席导师'}</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng ? 'Linda is currently studying to become a teacher at the University of Toronto. She graduated from Colonel By’s IB program in 2019 and McGill University in 2023. Linda has taught science, computer programming, math, and has been an invaluable part of the team since 2020.' : 'Linda目前正在多伦多大学从事教育事业。她于 2019 年毕业于 Colonel By 的 IB 课程，于 2023 年毕业于麦吉尔大学。她为 600 多名学生提供了科学、计算机编程和数学方面的基础知识。 Linda 是我们最有经验的导师，自 2020 年以来一直是团队的宝贵组成部分。'}</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[38rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fhai_edited.jpg?alt=media&token=8621dfb8-f05d-4c9a-b41d-890ff8a57253" alt="Michael Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Syed Haider Ali</a>
                        </h3>
                        <span className="text-gray-500">{isEng ? 'Head of English' : ' 英语主管'}</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng? 'Haider is currently a fourth year student at McGill University studying English literature. He graduated with 45/45 from the IB program and has been tutoring for over four years. His expertise in English combined with his tutoring experience makes him the perfect fit for guiding other tutors.' : 'Haider正在麦吉尔大学学习英国文学，这是他的第四年。他目前的 GPA 为 4.0。他也是 2020 年以满分从 IB 项目毕业的 339 名学生之一。Haider 是我们最受欢迎的导师之一，在四年多的时间里帮助了数百名学生进行创意和学术写作' }</p>
                    </div>
                </div> 
                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[40rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fneil_edited.png?alt=media&token=03260d0c-9636-460d-9a4a-46189e38d777&_gl=1*17d50tw*_ga*MTQ4ODU4NDg0NC4xNjk5MDY5Nzg0*_ga_CW55HF8NVT*MTY5OTEzNzQ0MC4zLjEuMTY5OTEzNzU5OC42MC4wLjA." alt="Sofia Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Neil Rahman</a>
                        </h3>
                        <span className="text-gray-500">Head of Math</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng? 'Neil is currently a second year student at McGill University studying Honours Mathematics and Computer Science. He graduated with 98% average from the IB program and has tutored for over five years. His incredible performances in both math contests and academics make him a tutor others look up to.' : 'Neil 正在麦吉尔大学学习荣誉数学和计算机科学二年级。他以 97% 的平均分从 IB 课程毕业，并多次在数学竞赛中取得优异成绩。他也已经从事家教工作五年多了。尼尔的勤奋工作态度和对教学的奉献精神使他成为其他人尊敬的导师。'}</p>
                        
                    </div>
                </div>
                

                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[31rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fgui_edited.jpg?alt=media&token=0fc68218-3cdc-49ec-9361-afe8ed8cbdb9" alt="Sofia Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Guilherme Oba</a>
                        </h3>
                        <span className="text-gray-500">Head of French</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng? 'Gui is a first year student at McGill University studying computer engineering. Gui, a Quebec native, is fluent in both national languages. During his four years as a tutor, Gui has led countless core and immersion students to bilingual success.' : 'Gui 是麦吉尔大学计算机工程专业的一年级学生。桂是魁北克人，精通两种国家语言。在担任导师的四年里，桂带领学生取得了双语成功。'}</p>
                        
                    </div>
                </div>


                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[35rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fwinsor_edited.jpg?alt=media&token=b1ec6dec-5358-490b-a945-d3fd5d5f3835" alt="Sofia Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Winsor Zhu </a>
                        </h3>
                        <span className="text-gray-500">IB Advisor</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng? 'Winsor is a current UBC student and an IB graduate with 4.0 GPA. He placed top 4 in Debate Nationals (Canada) and has coached hundreds of students. His ability to eloquently articulate ideas makes him a great tutor for those seeking to apply to the rigorous IB program' : 'Winsor 是 UBC 学生和 IB 毕业生，GPA 为 4.0。他在全国辩论赛（加拿大）中名列前 4 名，并指导过数百名学生。他雄辩地表达想法的能力使他成为那些寻求申请严格的 IB 课程的人的优秀导师。'}</p>
                        
                    </div>
                </div>


                <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                    <a href="#">
                        <img className="w-[41rem] rounded-lg sm:rounded-none sm:rounded-l-lg" src="https://firebasestorage.googleapis.com/v0/b/website-d9767.appspot.com/o/Misc.%20Images%2Fjason_aug_2023_1_1.png?alt=media&token=fbe11e72-65ca-4983-9d87-f7f548523e48" alt="Sofia Avatar"></img>
                    </a>
                    <div className="p-5">
                        <h3 className="text-xl font-bold tracking-tight text-gray-900">
                            <a href="#">Jason Chu</a>
                        </h3>
                        <span className="text-gray-500">Project Manager</span>
                        <p className="mt-3 mb-4 font-light text-gray-500">{isEng? 'Jason is an IB student at Merivale High School. He has been an innovator and a leader at S2S Tutoring since our founding, constantly pushing for new and creative courses like debating and video editing. Jason is committed to our mission of affordable education and has been a dedicated tutor himself for over four years.' : 'Jason 是 Merivale 高中的 IB 学生。自 S2S Tutoring 成立以来，他一直是创新者和领导者，不断推动辩论和视频编辑等新的创意课程。 Jason 致力于实现我们低价高质的教育的使命，并且自己担任导师已有四年多了。'}</p>
                        
                    </div>
                </div>


            </div>  
        </div>
        </section>
      <Footer></Footer>
    </>
  )
}

