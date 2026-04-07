import './Country.css'

function formatPopulation(value) {
    const n = Number(value)
    if (!Number.isFinite(n)) return String(value ?? '')
    return new Intl.NumberFormat('de-DE', { maximumFractionDigits: 0 }).format(Math.trunc(n))
}

export default function Country({ country } ) {

    const { name, flags, population, region, capital } = country

    return <div className="country">
        <div className="country__flag"><img src={flags.png} alt={name} /></div>
        <div className="country__description">
            <div className="country__title">{name}</div>
            <div className="country__parametrs">
                <div className="country__parametr">
                    <span className="parametr__bold">Population:</span>
                    <span className="parametr__regular">{formatPopulation(population)}</span>
                </div>
                <div className="country__parametr">
                    <span className="parametr__bold">Region:</span>
                    <span className="parametr__regular">{region}</span>
                </div>
                <div className="country__parametr">
                    <span className="parametr__bold">Capital:</span>
                    <span className="parametr__regular">{capital}</span>
                </div>
            </div>
        </div>
    </div>
}
