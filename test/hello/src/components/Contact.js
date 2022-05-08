import React, { Component } from 'react';

import ContactInfo from './ContactInfo';

class Contact extends Component {
    state = {
        keyword: '',
        contactData: [{
            name: 'David',
            phone: '010-1234-5678'
        }, {
            name: 'Albert',
            phone: '010-1234-1234'
        }, {
            name: 'John',
            phone: '010-5678-5678'
        }, {
            name: 'Wade',
            phone: '010-4312-5678'
        },]
    }
    _searchContact = (e) => { // 2. input 태그의 값이 변경 될 때마다 this.state.keyword 값이 변경
        this.setState({
            keyword: e.target.value
        });
    }
    render() {
        const mapToComponents = (data) => { // 3. 매핑 (들어온 인자는 this.state.contactData)
            data.sort(); // 3-1. this.state.contactData 를 정렬 (유니코드 값을 기준으로)
            data = data.filter( // 3-2. 정렬된 데이터를 필터링
                (contact) => { // 콜백함수의 인자는 element[, index, array] 콜백함수의 리턴값은 리턴값을 만족하는 엘리먼트들의 새로운 배열
                    return contact.name.toLowerCase() // 이름기준, 대소문자 구별 없이, 검색 (indexOf 메서드로)
                        .indexOf(this.state.keyword.toLowerCase()) > -1; // indexOf메서드의 인자는 검색할 내용 (string) 검색 결과가 없으면 리턴값은 -1
                }
            ); // 4. input 태그에 글자가 입력 될 때마다 리턴되는 배열이 달라짐. 필터링 된 배열을 data에 담고
            return data.map( // 5. 해당 data 배열을 매핑
                (contact, i) => { // map 메서드의 첫 번째 인자 - item, 두 번째 인자 - index
                    return (<ContactInfo contact={contact} key={i} />); // map 메서드의 리턴값은 콜백함수의 리턴값을 각각의 원소로하는 기존배열과 같은 길이의 배열
                } // 6. ContactInfo 컴포넌트가 배열의 길이만큼 리턴
            );
        }
        return (
            <div>
                <h1>Contact</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this._searchContact} // 1. input 창에 입력될 때 마다
                />
                <div>{mapToComponents(this.state.contactData)}</div> {/*7. 목록으로 표시*/}
            </div>
        )
    }
}

export default Contact;