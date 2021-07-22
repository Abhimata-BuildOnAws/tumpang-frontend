import PropTypes from 'prop-types'

const ChartStatsCard = ({title, value}) => {
    return (
        <div className="text-center border-2">
            <h5 className="text-gray-400 text-xs">{title}</h5>
            <h3 className="p-1 text-2xl">{value}</h3>
        </div>
    )
}

ChartStatsCard.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string
}


export default ChartStatsCard
