import React, { useState } from 'react'
import './searchAndList.css'
import { IoSearchSharp } from "react-icons/io5"

function SearchAndList() {
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedRate, setSelectedRate] = useState('Full')
    const [selectedType, setSelectedType] = useState('Every')

    // For Developed By
    const handleRadioChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const getFontWeight = (option) => {
        return selectedOption === option ? 500 : 400;
    };

    // For Rating
    const handleRadioChangeRate = (e) => {
        setSelectedRate(e.target.value);
    };

    const getRateFontWeight = (option) => {
        return selectedRate === option ? 500 : 400;
    };

    // For Application Type
    const handleRadioChangeType = (e) => {
        setSelectedType(e.target.value);
    };

    const getTypeFontWeight = (option) => {
        return selectedRate === option ? 500 : 400;
    };


    return (
        <>
            <div className='main' >
                <div className="input-group rounded-1 w-75">
                    <div className="input-group-text"><IoSearchSharp /></div>
                    <input type="text" className="form-control" id="specificSizeInputGroupUsername" placeholder="Search for products" />
                </div>

                <div className='listhead mt-5'>
                    <span>Developed by</span>

                    <div className='listItems'>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 mt-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="All"
                                checked={selectedOption === 'All'}
                                onChange={handleRadioChange}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault1"
                                style={{ fontWeight: getFontWeight('All') }}
                            >
                                All
                            </label>
                        </div>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 my-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="Evoque Innovative Lab"
                                checked={selectedOption === 'Evoque Innovative Lab'}
                                onChange={handleRadioChange}
                            />

                            {/* form-check-label */}
                            <label
                                className=""
                                htmlFor="flexRadioDefault2"
                                style={{ fontWeight: getFontWeight('Evoque Innovative Lab') }}
                            >
                                Evoque Innovative Lab
                            </label>
                        </div>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault3"
                                value="Lorem Ipsum 1"
                                checked={selectedOption === 'Lorem Ipsum 1'}
                                onChange={handleRadioChange}
                            />
                            {/* form-check-label */}
                            <label
                                className=""
                                htmlFor="flexRadioDefault3"
                                style={{ fontWeight: getFontWeight('Lorem Ipsum 1') }}
                            >
                                Lorem Ipsum 1
                            </label>
                        </div>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 my-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault4"
                                value="Lorem Ipsum 2"
                                checked={selectedOption === 'Lorem Ipsum 2'}
                                onChange={handleRadioChange}
                            />
                            {/* form-check-label */}
                            <label
                                className=""
                                htmlFor="flexRadioDefault4"
                                style={{ fontWeight: getFontWeight('Lorem Ipsum 2') }}
                            >
                                Lorem Ipsum 2
                            </label>
                        </div>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault5"
                                value="Lorem Ipsum 3"
                                checked={selectedOption === 'Lorem Ipsum 3'}
                                onChange={handleRadioChange}
                            />
                            {/* form-check-label */}
                            <label
                                className=""
                                htmlFor="flexRadioDefault5"
                                style={{ fontWeight: getFontWeight('Lorem Ipsum 3') }}
                            >
                                Lorem Ipsum 3
                            </label>
                        </div>
                    </div>
                </div>

                {/* -----------------------Rating By Section-------------------------- */}

                <div className='listhead mt-4'>
                    <span>Rating by</span>

                    <div className='listItems'>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 mt-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="firstname"
                                id="firstnameone"
                                value="Full"
                                checked={selectedRate === 'Full'}
                                onChange={handleRadioChangeRate}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="firstnameone"
                                style={{ fontWeight: getRateFontWeight('Full') }}
                            >
                                All
                            </label>
                        </div>

                        {/* Four Star */}
                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 my-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefaulttwo"
                                id="flexRadioDefault2two"
                                value="fourStar"
                                checked={selectedRate === 'fourStar'}
                                onChange={handleRadioChangeRate}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault2two"
                                style={{ fontWeight: getRateFontWeight('fourStar') }}
                            >
                                
                                <img src="./images/fourstar.svg" alt="" /> & above

                            </label>
                        </div>

                        {/* Three Star */}
                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefaulttwo"
                                id="flexRadioDefault3two"
                                value="threeStar"
                                checked={selectedRate === 'threeStar'}
                                onChange={handleRadioChangeRate}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault3two"
                                style={{ fontWeight: getRateFontWeight('threeStar') }}
                            >
                                <img src="./images/threestar.svg" alt="" /> & above
                            </label>
                        </div>

                        {/* Two Star */}
                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 my-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefaulttwo"
                                id="flexRadioDefault4two"
                                value="twoStar"
                                checked={selectedRate === 'twoStar'}
                                onChange={handleRadioChangeRate}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault4two"
                                style={{ fontWeight: getRateFontWeight('twoStar') }}
                            >
                                <img src="./images/twoStar.svg" alt="" /> & above
                            </label>
                        </div>

                        {/* One Star */}
                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="flexRadioDefaulttwo"
                                id="flexRadioDefault5two"
                                value="oneStar"
                                checked={selectedRate === 'oneStar'}
                                onChange={handleRadioChangeRate}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault5two"
                                style={{ fontWeight: getRateFontWeight('oneStar') }}
                            >
                                <img src="./images/oneStar.svg" alt="" /> & above
                            </label>
                        </div>
                    </div>

                </div>

                {/* ------------------------Application Type-------------------------- */}

                <div className='listhead mt-4'>
                    <span>Application Type</span>

                    <div className='listItems'>

                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 mt-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="type"
                                id="everyone"
                                value="Every"
                                checked={selectedType === 'Every'}
                                onChange={handleRadioChangeType}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="everyone"
                                style={{ fontWeight: getTypeFontWeight('Every') }}
                            >
                                All
                            </label>
                        </div>

                        {/* Web Based */}
                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1 my-3">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="type"
                                id="webBased"
                                value="Web"
                                checked={selectedType === 'Web'}
                                onChange={handleRadioChangeType}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="webBased"
                                style={{ fontWeight: getTypeFontWeight('Web') }}
                            >
                                
                                Web based applications

                            </label>
                        </div>

                        {/* Mobile Applications */}
                        {/* form-check */}
                        <div className="d-flex items-center justify-center gap-1">
                            {/* form-check-input */}
                            <input
                                className=""
                                type="radio"
                                name="type"
                                id="mobile"
                                value="Mobile"
                                checked={selectedType === 'Mobile'}
                                onChange={handleRadioChangeType}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="mobile"
                                style={{ fontWeight: getTypeFontWeight('Mobile') }}
                            >
                                Mobile applications
                            </label>
                        </div>

                        

                        
                    </div>

                </div>

            </div>
        </>
    )
}

export default SearchAndList

















// import React from 'react'
// import './searchAndList.css'
// import { IoSearchSharp } from "react-icons/io5";


// function SearchAndList() {
//     return (
//         <>

//             <div className='main'>
//                 <div class="input-group rounded-1 w-75">
//                     <div class="input-group-text"><IoSearchSharp /></div>
//                     <input type="text" class="form-control" id="specificSizeInputGroupUsername" placeholder="Search for products" />
//                 </div>

//                 <div className='developedlist mt-5'>

//                     <span>Developed by</span>

//                     <div className='listItems'>

//                         <div class="form-check mt-3">
//                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
//                                 <label class="form-check-label" for="flexRadioDefault1">
//                                     All
//                                 </label>
//                         </div>
//                         <div class="form-check my-3">
//                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
//                                 <label class="form-check-label" for="flexRadioDefault2">
//                                 Evoque Innovative Lab
//                                 </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
//                                 <label class="form-check-label" for="flexRadioDefault2">
//                                 Lorem Ipsum
//                                 </label>
//                         </div>
//                         <div class="form-check my-3">
//                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
//                                 <label class="form-check-label" for="flexRadioDefault2">
//                                 Lorem Ipsum
//                                 </label>
//                         </div>
//                         <div class="form-check">
//                             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
//                                 <label class="form-check-label" for="flexRadioDefault2">
//                                 Lorem Ipsum
//                                 </label>
//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </>
//     )
// }

// export default SearchAndList