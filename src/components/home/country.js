import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' },
]
const DropdownExampleSearchSelection = () => (
    <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
    />
)

export default class country extends Component {
    render() {
        return (
            <div role="combobox" aria-expanded="false" class="ui fluid search selection dropdown">
                <input type="text" aria-autocomplete="list" autoComplete="off" class="search" tabindex="0" value="" />
                <div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Select Country</div>
                <i aria-hidden="true" class="dropdown icon"></i>
                <div role="listbox" class="menu transition">
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item"><i class="af flag"></i><span class="text">Afghanistan</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="ax flag"></i><span class="text">Aland Islands</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="al flag"></i><span class="text">Albania</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="dz flag"></i><span class="text">Algeria</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="as flag"></i><span class="text">American Samoa</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="ad flag"></i><span class="text">Andorra</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="ao flag"></i><span class="text">Angola</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="ai flag"></i><span class="text">Anguilla</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="ag flag"></i><span class="text">Antigua</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="ar flag"></i><span class="text">Argentina</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="am flag"></i><span class="text">Armenia</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="aw flag"></i><span class="text">Aruba</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="au flag"></i><span class="text">Australia</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="at flag"></i><span class="text">Austria</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="az flag"></i><span class="text">Azerbaijan</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="bs flag"></i><span class="text">Bahamas</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="bh flag"></i><span class="text">Bahrain</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="bd flag"></i><span class="text">Bangladesh</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="bb flag"></i><span class="text">Barbados</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><i class="by flag"></i>
                        <span class="text">Belarus</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="be flag"></i>
                        <span class="text">Belgium</span>
                    </div>
                    <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="bz flag"></i>
                        <span class="text">Belize</span></div><div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item">
                        <i class="bj flag"></i>
                        <span class="text">Benin</span>
                    </div>
                </div>
            </div>

        )
    }
}
