import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";



function TaxInvoice({ pdfData }) {
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
      marginBottom: 10,
    },
    title: {
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 14,
      marginVertical: 10,
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
        {/* Company Details */}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Vedaantayurveda</Text>
            <Text>Shampur Bazar, Krishnanagar, Nadia 741301</Text>
          </View>

          {/* Title */}
          <Text style={styles.title}>TAX INVOICE</Text>

          {/* Invoice Details */}
          <View>
            <View style={styles.row}>
              <Text>Invoice No: {pdfData?.invoice_no || "N/A"}</Text>
              <Text>Member ID: {pdfData?.member_id || "N/A"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Invoice Date: {pdfData?.invoice_date || "N/A"}</Text>
              <Text>Order Placed: {pdfData?.order_date || "N/A"}</Text>
            </View>
            <View style={styles.row}>
              <Text>State: {pdfData?.state || "N/A"}</Text>
              <Text>Mode of Delivery: {pdfData?.delivery_mode || "N/A"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Code: {pdfData?.code || "N/A"}</Text>
              <Text>POD No: {pdfData?.pod_no || "N/A"}</Text>
            </View>
          </View>

          {/* Shipping and Billing Address */}
          <View style={{ marginTop: 10 }}>
            <View style={styles.row}>
              <Text style={styles.boldText}>Shipping Address:</Text>
              <Text style={styles.boldText}>Billing Address:</Text>
            </View>
            <View style={styles.row}>
              <Text>{pdfData?.shipping_address || "N/A"}</Text>
              <Text>{pdfData?.billing_address || "N/A"}</Text>
            </View>
          </View>

          {/* Product Table */}
          <View style={styles.table}>
            {/* Table Header */}
            <View style={styles.tableHeader}>
              <Text style={[styles.cell, { flex: 0.5 }]}>S. No.</Text>
              <Text style={styles.cell}>Product Description</Text>
              <Text style={styles.cell}>HSN Code</Text>
              <Text style={styles.cell}>Unit Price (Rs.)</Text>
              <Text style={styles.cell}>Qty</Text>
              <Text style={styles.cell}>Net Amount (Rs.)</Text>
              <Text style={styles.cell}>IGST Rate</Text>
              <Text style={styles.cell}>IGST Amount (Rs.)</Text>
              <Text style={styles.cell}>Total (Rs.)</Text>
            </View>

            {/* Table Rows */}
            {pdfData?.products?.map((product, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.cell, { flex: 0.5 }]}>{index + 1}</Text>
                <Text style={styles.cell}>{product.description || "N/A"}</Text>
                <Text style={styles.cell}>{product.hsn_code || "N/A"}</Text>
                <Text style={styles.cell}>{product.unit_price || "N/A"}</Text>
                <Text style={styles.cell}>{product.quantity || "N/A"}</Text>
                <Text style={styles.cell}>{product.net_amount || "N/A"}</Text>
                <Text style={styles.cell}>{product.igst_rate || "N/A"}</Text>
                <Text style={styles.cell}>{product.igst_amount || "N/A"}</Text>
                <Text style={styles.cell}>{product.total || "N/A"}</Text>
              </View>
            ))}
          </View>

          {/* Amount Summary */}
          <View style={{ marginTop: 10 }}>
            <View style={styles.row}>
              <Text style={styles.boldText}>Amount in Words:</Text>
              <Text>{pdfData?.amount_in_words || "N/A"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Total Amount before Tax:</Text>
              <Text>{pdfData?.total_before_tax || "N/A"}</Text>
            </View>
            <View style={styles.row}>
              <Text>Add: IGST @12%:</Text>
              <Text>{pdfData?.igst || "N/A"}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.boldText}>Total Amount after Tax:</Text>
              <Text>{pdfData?.total_after_tax || "N/A"}</Text>
            </View>
          </View>

          {/* Footer */}
          <Text style={styles.footer}>
            Thank you for choosing Vedaantayurveda!
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default TaxInvoice;
