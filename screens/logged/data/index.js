import React, { Component } from 'react';

import {
    AsyncStorage,
    BackHandler,
    Button,
    Dimensions,
    ScrollView,
    Text,
    View
} from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph
} from 'react-native-chart-kit'

import '../../../globals';

export default class DataScreen extends Component {
    render() {
        const { rootNavigation } = this.props.screenProps;
        const screenWidth = Dimensions.get('window').width;
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                data: [ 20, 45, 28, 80, 99, 43 ]
            }]
        };
        const data2 = [0.20,0.30,0.80];
        const commitsData = [
            { date: '2017-01-02', count: 1 },
            { date: '2017-01-03', count: 2 },
            { date: '2017-01-04', count: 3 },
            { date: '2017-01-05', count: 4 },
            { date: '2017-01-06', count: 5 },
            { date: '2017-01-30', count: 2 },
            { date: '2017-01-31', count: 3 },
            { date: '2017-03-01', count: 2 },
            { date: '2017-04-02', count: 4 },
            { date: '2017-03-05', count: 2 },
            { date: '2017-02-30', count: 4 }
        ];
        const chartConfig = {
            backgroundGradientFrom: '#142A7D',
            backgroundGradientTo: '#263E94',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            decimalPlaces: 0,
            style: {
                borderRadius: 16
            }
        };
        return (
            <View style={{flex:1, paddingTop: 25, alignItems:'center', backgroundColor: '#E1E1E1'}}>
                <ScrollView>
                    <Text>
                        Bezier Line Chart
                    </Text>
                    <LineChart
                        data={data}
                        width={screenWidth * 0.95}
                        height={220}
                        chartConfig={chartConfig}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                    <Text>
                        Progress Chart
                    </Text>
                    <ProgressChart
                        data={data2}
                        width={screenWidth*0.95}
                        height={220}
                        chartConfig={chartConfig}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                    <Text>
                        Contribution Chart
                    </Text>
                    <ContributionGraph
                        values={commitsData}
                        endDate={new Date('2017-04-01')}
                        numDays={105}
                        width={screenWidth*0.95}
                        height={220}
                        chartConfig={chartConfig}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </ScrollView>
            </View>
        )
    }
};
