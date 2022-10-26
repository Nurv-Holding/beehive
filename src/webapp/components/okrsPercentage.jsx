function okrsPercentage() {
    return(
        <div className='container-two-percentage'>
            <div className='container-percentage-okr'>
                <div className='percentage-bar-okrs'>
                    <p className='percentage-title'>Meu progesso</p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-my-progress'></div>
                    </div>

                    <p className='percentage-title mt-8'>Okrs do time</p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-team-progress'></div>
                    </div>
                </div>
            </div>

            <div className='container-percentage-okr'>
                <div className='percentage-bar-okrs'>
                    <p className='percentage-title'>Rendimento mensal</p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-monthly-income'></div>
                    </div>

                    <p className='percentage-title mt-8'>Okrs do time</p>
                    <div className='container-infos-percentage'>
                        <div className='percentage-team-progress'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default okrsPercentage
