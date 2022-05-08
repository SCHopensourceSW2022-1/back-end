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
    _searchContact = (e) => { // 2. input �±��� ���� ���� �� ������ this.state.keyword ���� ����
        this.setState({
            keyword: e.target.value
        });
    }
    render() {
        const mapToComponents = (data) => { // 3. ���� (���� ���ڴ� this.state.contactData)
            data.sort(); // 3-1. this.state.contactData �� ���� (�����ڵ� ���� ��������)
            data = data.filter( // 3-2. ���ĵ� �����͸� ���͸�
                (contact) => { // �ݹ��Լ��� ���ڴ� element[, index, array] �ݹ��Լ��� ���ϰ��� ���ϰ��� �����ϴ� ������Ʈ���� ���ο� �迭
                    return contact.name.toLowerCase() // �̸�����, ��ҹ��� ���� ����, �˻� (indexOf �޼����)
                        .indexOf(this.state.keyword.toLowerCase()) > -1; // indexOf�޼����� ���ڴ� �˻��� ���� (string) �˻� ����� ������ ���ϰ��� -1
                }
            ); // 4. input �±׿� ���ڰ� �Է� �� ������ ���ϵǴ� �迭�� �޶���. ���͸� �� �迭�� data�� ���
            return data.map( // 5. �ش� data �迭�� ����
                (contact, i) => { // map �޼����� ù ��° ���� - item, �� ��° ���� - index
                    return (<ContactInfo contact={contact} key={i} />); // map �޼����� ���ϰ��� �ݹ��Լ��� ���ϰ��� ������ ���ҷ��ϴ� �����迭�� ���� ������ �迭
                } // 6. ContactInfo ������Ʈ�� �迭�� ���̸�ŭ ����
            );
        }
        return (
            <div>
                <h1>Contact</h1>
                <input
                    name="keyword"
                    placeholder="Search"
                    value={this.state.keyword}
                    onChange={this._searchContact} // 1. input â�� �Էµ� �� ����
                />
                <div>{mapToComponents(this.state.contactData)}</div> {/*7. ������� ǥ��*/}
            </div>
        )
    }
}

export default Contact;