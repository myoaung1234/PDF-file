import React from "react";
import { Page, Text, Image,View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff'
  },
  section: {
    margin: 10,
    flexGrow: 1,
  },
  rowView: {
    flexDirection: 'row',
    textAlign: 'center'
  },

  columnView: {
    flexDirection: 'column',
    textAlign: 'center'
  },
  p: {
    fontSize: '12px',
    color: 'gray',
    marginBottom: '12px'
  },
  h5: {
    fontSize: '12px',
    color: '#3a3a3a',
    marginBottom: '12px',
  },
  item: {
    color: 'white', 
    fontSize: '12px'
  },
  itemQra: {
    color: 'white', 
    fontSize: '11px',
    marginLeft: '45px'
  }
});

const PDFFILE = () => {
  return (
    <Document>
    <Page size="A4" style={{flexDirection: 'column'}} >
      <View style={styles.page}>
      <View style={styles.section}>
        <View style={styles.rowView}>
            <View style={styles.section}>
              <Image style={{ width: '100px', height: '150px', borderRadius: '30px', marginBottom: '10px'}} src='./logo192.png'/>
              <Text style={{ fontWeight: 'bold', fontSize: '13px', marginBottom: '12px'}}>Myo Aung</Text>
              <View>
                <View style={{flexDirection: 'row', gap: 4}}>
                  <View style={{ textAlign: 'center', marginRight: '80px' }}>
                    <Text style={{ fontSize: '12px', color: 'gray', marginBottom: '6px'}}>Bill To:</Text>
                    <Text style={{ fontWeight: 'bold',color: '#3a3a3a', fontSize: '13px'}}>Myo Aung</Text>
                  </View>
                
                  <View style={{ textAlign: 'center'}}>
                      <Text style={{ fontSize: '12px', color: 'gray', marginBottom: '6px'}}>Ship To:</Text>
                      <Text style={{ fontWeight: 'bold',color: '#3a3a3a', fontSize: '13px'}}>Nay Zaw</Text> 
                  </View>
                </View>
              </View>
            </View>
        </View>
      </View>
      <View style={{ marginTop: 20, flexGrow: 1, textAlign: 'left' }}>
        <View style={{ margin: 17, alignItems: 'flex-end', marginBottom: '45px'}}>
          <Text style={{ fontSize: '35px', fontWeight: 'bold', marginBottom: '6px'}}>INVOICE</Text>
          <Text style={{ fontSize: '13px', color: 'gray'}}>#3</Text>
        </View>
        <View style={styles.section}>
          <View style={{ textAlign: 'left', flexDirection: 'row', justifyContent: 'space-between',marginRight: '20px'}}>
            <View style={{ alignItems: "flex-end"}}>
              <Text style={styles.p}>Date:</Text>
              <Text style={styles.p}>Payment Terms:</Text>
              <Text style={styles.p}>Due Date:</Text>
              <Text style={styles.p}>PO Number:</Text>
              <Text style={{ fontSize: '15px', color: '#3a3a3a'}}>Balance Due:</Text>
            </View>
            <View style={{ alignItems: "flex-end"}}>
              <Text style={styles.h5}>Jan 6, 2023</Text>
              <Text style={styles.h5}>Myo Aung</Text>
              <Text style={styles.h5}>Jan 20, 2023</Text>
              <Text style={styles.h5}>214356</Text>
              <Text style={{ fontSize: '15px', color: '#3a3a3a'}}>MMK 3000</Text>
            </View>
            <View></View>
          </View>
        </View>
      </View>
      </View>
      <View style={{ margin: 20, padding: '10px', marginBottom: '-25px',
        backgroundColor: '#3a3a3a', borderRadius: '5px', 
        flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={styles.item}>Item</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.itemQra}>Quntity</Text>
          <Text style={styles.itemQra}>Rate</Text>
          <Text style={styles.itemQra}>Amount</Text>
        </View>
      </View>
      <View style={{ margin: 20, padding: '10px',  
        flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: '13px', fontWeight: 'bold', color: '#3a3a3a'}}>Website domain</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: '13px', color: '#3a3a3a',marginLeft: '45px'}}>2</Text>
          <Text style={{fontSize: '13px', color: '#3a3a3a',marginLeft: '45px'}}>2000</Text>
          <Text style={{fontSize: '13px', color: '#3a3a3a',marginLeft: '45px'}}>4000</Text>
        </View>
      </View>
      <View style={{ margin: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'column', alignItems: 'flex-start', padding: '10px', width: '50%'}}>
          <Text style={styles.p}>Notes:</Text>
          <Text style={styles.h5}>Lorem ipsum dolor</Text>
          <Text style={styles.p}>Terms:</Text>
          <Text style={styles.h5}>M2N3</Text>
        </View>
        
        <View style={{ flexDirection: 'row', alignItems: 'flex-end'}}>
          <View style={{flexDirection: 'column', textAlign: 'right', alignItems: 'flex-end'}}>
            <Text style={styles.p}>Subtotal:</Text>
            <Text style={styles.p}>Tax(0%):</Text>
            <Text style={styles.p}>Total:</Text>
            <Text style={styles.p}>Amount paid:</Text>
          </View>
          <View style={{flexDirection: 'column', alignItems: 'flex-end', marginLeft: '60px'}}>
            <Text style={styles.h5}>4000</Text>
            <Text style={styles.h5}>MMK 0</Text>
            <Text style={styles.h5}>MMK 4000</Text>
            <Text style={styles.h5}>MMK 1000</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
  );
};

export default PDFFILE;