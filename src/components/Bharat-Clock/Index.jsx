import Heading from './Heading';
import Text1 from './Text1'

export default function Index() {
    return <div className='container mt-4'>
        <div className="row mx-auto w-50 bg-success px-5 py-3">
            <div className="col">
                <Heading></Heading>
                <Text1 />
            </div>
        </div>

    </div>
}