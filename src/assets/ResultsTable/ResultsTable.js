const ResultsTable = (props) => {
    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested Capital</th>
                    <th>Interest (Year)</th>
                    <th>Total overall Interest</th>
                    <th>Total Savings</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((yeardata) => (
                    <tr>
                        <td>{yeardata.year}</td>
                        <td>{parseInt(props.initialInvestment) + yeardata.yearlyContribution * yeardata.year}</td> {/* //TOTAL INVESTED CAPITAL */}
                        <td>{yeardata.yearlyInterest}</td>           {/* INTEREST GAINED IN YEAR */}
                        <td>{yeardata.savingsEndOfYear - props.initialInvestment - yeardata.yearlyContribution * yeardata.year}</td> {/* //TOTAL INTEREST GAINED */}
                        <td>{yeardata.savingsEndOfYear}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default ResultsTable;

