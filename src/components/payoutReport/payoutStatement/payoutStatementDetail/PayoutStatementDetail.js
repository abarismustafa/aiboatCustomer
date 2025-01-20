import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
function PayoutStatementDetail({ pdfData }) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: "#FFFFFF",
      padding: 20,
      fontSize: 10,
    },
    container: {
      border: "1px solid black",
      padding: 10,
    },
    header: {
      textAlign: "center",
      marginBottom: 10,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 14,
      marginVertical: 10,
    },
    section: {
      marginBottom: 10,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 5,
    },
    boldText: {
      fontWeight: "bold",
    },
    table: {
      marginTop: 10,
      border: "1px solid black",
    },
    tableHeader: {
      flexDirection: "row",
      borderBottom: "1px solid black",
      padding: 5,
      backgroundColor: "#f0f0f0",
    },
    tableRow: {
      flexDirection: "row",
      padding: 5,
      borderBottom: "1px solid black",
    },
    cell: {
      flex: 1,
      textAlign: "center",
    },
    footer: {
      marginTop: 20,
      textAlign: "center",
    },
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.boldText}>Vedaanta</Text>
          <Text>{pdfData?.billing_address.split(",")[0]}</Text>
          <Text>{pdfData?.billing_address.split(",")[1]}</Text>
          <Text>Contact No: 9958056744</Text>
        </View>

        {/* Title */}
        <Text style={styles.title}>Payout Statement</Text>

        {/* Payout Details */}
        <View style={styles.section}>
          <View style={styles.row}>
            <Text>Payout No: 1</Text>
            <Text>Dist. Id: {pdfData?.member_id || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text>Payout Date: 17-Jun-2021</Text>
            <Text>Payout Period: From 15-Jun-2021 to 17-Jun-2021</Text>
          </View>
          <View style={styles.row}>
            <Text>Dated: 21/01/2025</Text>
          </View>
        </View>

        {/* Income Details Table */}
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableHeader}>
            <Text style={[styles.cell, { flex: 2 }]}>Income Type</Text>
            <Text style={styles.cell}>Amount (Rs.)</Text>
          </View>

          {/* Table Rows */}
          {[
            { label: "Binary Income", amount: "0.00" },
            { label: "Self BV Income", amount: "0.00" },
            { label: "Welcome Bonus", amount: "0.00" },
            { label: "Term Sale Bonus", amount: "0.00" },
            { label: "Leadership Bonus", amount: "0.00" },
            { label: "Star Bonus", amount: "0.00" },
            { label: "Super Star Bonus", amount: "0.00" },
            { label: "Gold Star Bonus", amount: "0.00" },
            { label: "Ruby Star Bonus", amount: "0.00" },
            { label: "Diamond Bonus", amount: "0.00" },
          ].map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={[styles.cell, { flex: 2 }]}>{item.label}</Text>
              <Text style={styles.cell}>{item.amount}</Text>
            </View>
          ))}

          {/* Total Gross Income */}
          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 2, fontWeight: "bold" }]}>
              Total Gross Income
            </Text>
            <Text style={styles.cell}>0.00</Text>
          </View>

          {/* Deductions */}
          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 2 }]}>T.D.S (@0%)</Text>
            <Text style={styles.cell}>0.00</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 2 }]}>Service Charge (@0%)</Text>
            <Text style={styles.cell}>0.00</Text>
          </View>

          {/* Net Payable Incentive */}
          <View style={styles.tableRow}>
            <Text style={[styles.cell, { flex: 2, fontWeight: "bold" }]}>
              Net Payable Incentive
            </Text>
            <Text style={styles.cell}>0.00</Text>
          </View>
        </View>

        {/* Footer */}
        <View style={{ marginTop: 20 }}>
          <Text>* Payout will not be released without PAN Number.</Text>
          <Text>Amount in Words: Only</Text>
        </View>

        <Text style={styles.footer}>Thank you for choosing Vedaanta!</Text>
      </Page>
    </Document>
  );
}

export default PayoutStatementDetail;
