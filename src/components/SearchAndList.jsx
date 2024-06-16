import React, { useEffect, useState } from 'react'
import './searchAndList.css'
import { IoSearchSharp } from "react-icons/io5"
import { postingTheList } from '../services/AllApi';

function SearchAndList() {
    const [selectedOption, setSelectedOption] = useState('All');
    const [selectedRate, setSelectedRate] = useState('5')
    const [selectedType, setSelectedType] = useState('null')

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
        const type = e.target.value;
        setSelectedType(type);
        postList(type)

    };

    const getTypeFontWeight = (option) => {
        return selectedType === option ? 500 : 400;
    };

    // ----------For Filter-------------Filter------------------Filter------------------Filter-----------Filter---------

    const postList = async (type) => {

        try{

            const header = {
                "content-type" : "application/json",
                'Access-Token': 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ'
            };

            const data = await postingTheList(type,header);

            if(!data){
                throw new Error('No data returned from the API or I conducted a mistake while doing API Call')
            }
            console.log("The posted data is :", data );

        }catch(error){
            console.error("Error in the posting the list :", error)
        }
        

    }
   


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
                                value='5'
                                checked={selectedRate === '5'}
                                onChange={handleRadioChangeRate}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="firstnameone"
                                style={{ fontWeight: getRateFontWeight('5') }}
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
                                value="4"
                                checked={selectedRate === '4'}
                                onChange={handleRadioChangeRate}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault2two"
                                style={{ fontWeight: getRateFontWeight('4') }}
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
                                value="3"
                                checked={selectedRate === '3'}
                                onChange={handleRadioChangeRate}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault3two"
                                style={{ fontWeight: getRateFontWeight('3') }}
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
                                value="2"
                                checked={selectedRate === '2'}
                                onChange={handleRadioChangeRate}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault4two"
                                style={{ fontWeight: getRateFontWeight('2') }}
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
                                value="1"
                                checked={selectedRate === '1'}
                                onChange={handleRadioChangeRate}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="flexRadioDefault5two"
                                style={{ fontWeight: getRateFontWeight('1') }}
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
                                value='null'
                                checked={selectedType === 'null'}
                                onChange={(e) => {handleRadioChangeType(e)}}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="everyone"
                                style={{ fontWeight: getTypeFontWeight('null') }}
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
                                value="1"
                                checked={selectedType === '1'}
                                onChange={(e) => {handleRadioChangeType(e)}}
                                // onChange={handleRadioChangeType}
                            />

                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="webBased"
                                style={{ fontWeight: getTypeFontWeight('1') }}
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
                                value="2"
                                checked={selectedType === '2'}
                                onChange={(e) => {handleRadioChangeType(e)}}
                                // onChange={handleRadioChangeType}
                            />
                            {/* form-check-label */}
                            <label
                                className="above"
                                htmlFor="mobile"
                                style={{ fontWeight: getTypeFontWeight('2') }}
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

















