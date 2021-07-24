import PropTypes from 'prop-types'

const StatCard = ({ title , value }) => {
    return (
        <div className="object-fit w-48 break-words bg-white rounded shadow-md items-center border-2">
            <div className="text-center flex-grow p-6">
                <h5 className="text-gray-400 text-s">
                    {title}
                </h5>
                <h3 className="p-1 text-3xl">
                    {value}
                </h3>
            </div>
        </div>
    )
}

StatCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
}


export default StatCard
