import React from 'react';
import {shallow} from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

test('ExpenseSummary with 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={2351354606} />);
    expect(wrapper).toMatchSnapshot();
});