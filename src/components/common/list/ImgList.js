import ImgListItem from './ImgListItem';

const ImgList = ({ data, className }) => {
    return (
        <ul className={className}>
            {data.map((data, idx) => <li key={idx} className='grid_item'><ImgListItem data={data} /></li>)}
        </ul>
    );
};

export default ImgList;