import taskify from '../asset/taskify.png';
import swiggy from '../asset/swiggy.png';
import extension from '../asset/extension.png';

const Project = () => {
  const list = [
    {
      name: 'SnapStudy',
      description:
        'Designed and developed a Chrome extension that streamlines the process of capturing and saving screenshots while watching YouTube videos. The extension automates the entire process, ensuring a seamless and distraction-free experience. It supports both Mac and Windows with intuitive keyboard shortcuts, enhancing productivity and allowing users to focus on their content effortlessly.',
      link: 'https://chromewebstore.google.com/detail/snapstudy/kajdifcpoekkpbfpjeilejikekihbjjb',
      gitlink: 'https://github.com/Khaliditsme/SnapStudy',
      image: extension,
    },
    {
      name: 'FoodCourt App',
      description:
        'Designed and developed a FoodCourt App using JavaScript and React, showcasing restaurant details like names, cuisines, menus, ratings, and prices by integrating Swiggy’s public API. Utilized React Hooks for effective state management, React Router for smooth navigation, and Lazy Loading to enhance performance. Leveraged Parcel and Babel for optimized builds and seamless functionality.',
      link: 'https://food-court-iota.vercel.app/',
      gitlink: 'https://github.com/Khaliditsme/Food_Court',
      image: swiggy,
    },
    {
      name: 'Taskify',
      description:
        'Designed and developed a TaskManager Web App enabling users to efficiently add, delete, update, and view tasks. Built and tested robust Express APIs for seamless CRUD operations, utilizing Postman for validation. Integrated MongoDB Atlas with Mongoose for reliable database interactions and implemented a modular architecture with routers and controllers for scalability and code maintainability.',
      link: 'https://taskify-frontend-tau.vercel.app/',
      gitlink: 'https://github.com/Khaliditsme/Taskify_Frontend',
      image: taskify,
    },
  ];
  return (
    <div>
      <h1 className='text-center font-bold text-2xl sm:text-2xl md:text-4xl lg:text-5xl mt-5'>
        Projects
      </h1>
      <hr className='border-2 border-red m-5 mt-4 w-[92vw] mx-auto' />
      {list.map((item) => {
        return (
          <div className='flex flex-col  lg:flex-row justify-start items-start sm:m-3 md:m-5 lg:m-14 border-b-4 border-red pb-6'>
            <div className='w-[100%] lg:w-[50%] sm:m-2 md:m-4 lg:m-7 flex flex-col justify-center items-center '>
              <h1 className='font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl mt-3'>
                {item?.name}
              </h1>
              <p className='text-center'>{item.description}</p>
              <a
                href={item.link}
                target='_blank'
                className='font-semibold text-1xl mt-2 text-red'
                rel='noreferrer'
              >
                Live Preview
              </a>
              <br />
              <a
                href={item.gitlink}
                target='_blank'
                className='font-semibold text-1xl text-red'
                rel='noreferrer'
              >
                Github
              </a>
            </div>

            <div className='sm:w-[50vw] md:w-[40vw] lg:w-[40vw] border-2 border-grey mt-6 sm:mb-0'>
              <img src={item.image} alt='' />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
