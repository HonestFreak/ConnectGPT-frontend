const CardOne = (props) => {
  return (
    <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">

<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 64 64">
<path fill="#da7200" d="M14,55c-1.28,0-2.559-0.488-3.536-1.465c-1.953-1.952-1.953-5.118,0-7.07l18-18 c1.953-1.953,5.118-1.953,7.071,0c1.953,1.952,1.953,5.118,0,7.07l-18,18C16.559,54.512,15.28,55,14,55z"></path><ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse><circle cx="35.5" cy="27.5" r="21.5" fill="#a7b3c7"></circle><circle cx="35.5" cy="27.5" r="14.5" fill="#4ccff1"></circle><path fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="3" d="M23.825,21.903c0.583-1.375,1.426-2.615,2.467-3.656s2.281-1.884,3.656-2.467"></path><path d="M56.407,22.56C53.929,22.856,52,24.941,52,27.5C52,36.598,44.598,44,35.5,44 c-2.841,0-5.655-0.747-8.139-2.161c-1.957-1.113-4.417-0.783-6.01,0.81L14,50c-1.305,1.305-1.717,3.148-1.277,4.813 C13.142,54.924,13.569,55,14,55c1.28,0,2.559-0.488,3.536-1.465l7.352-7.352C28.021,47.967,31.637,49,35.5,49 C47.374,49,57,39.374,57,27.5C57,25.797,56.781,24.148,56.407,22.56z" opacity=".15"></path><path fill="#fff" d="M14.579,32.442C17.064,32.151,19,30.063,19,27.5C19,18.402,26.402,11,35.5,11 c2.558,0,4.644-1.928,4.94-4.407C38.852,6.219,37.203,6,35.5,6C23.626,6,14,15.626,14,27.5C14,29.202,14.204,30.855,14.579,32.442z" opacity=".3"></path>
</svg>


      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {props.propvalue}
          </h4>
          <span className="text-sm font-medium">Total Queries</span>
        </div>

        </div>
    </div>
  );
};

export default CardOne;
