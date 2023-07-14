import { Link } from 'react-router-dom';
import Docs from '../components/Documents.tsx'

const DocumentPage = () => {
  return (
    <>
    <div className='py-3'>
      <Link
              to="adddocs"
              className="inline-flex items-center justify-end rounded-md bg-success py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              + Add Documents/Pages/Urls
        </Link>
    </div>
      <div className="grid grid-cols-1 gap-4 md:gap-6 2xl:gap-7.5">
        <Docs/>
      </div>
    </>
  );
};

export default DocumentPage;
