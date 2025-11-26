using System.Diagnostics.Eventing.Reader;

namespace projek_akhir_yulmenina
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        public void AllClear()
        {
            txtUsia.Clear();
            txtNama.Clear();
            txtJK.Clear();
            txtStatus.Clear();
        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void label5_Click(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            AllClear();
        }

        private void groupBox3_Enter(object sender, EventArgs e)
        {

        }

        private void label10_Click(object sender, EventArgs e)
        {

        }

        private void label8_Click(object sender, EventArgs e)
        {

        }

        private void groupBox2_Enter(object sender, EventArgs e)
        {

        }

        private void textBox8_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {

        }

        private void groupBox1_Enter(object sender, EventArgs e)
        {

        }

        private void label13_Click(object sender, EventArgs e)
        {

        }

        private void checkBox1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Add(txtNama.Text, txtUsia.Text, txtJK.Text, txtStatus.Text);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            DialogResult result = MessageBox.Show("Apakah kamu yakin untuk keluar dari aplikasi?"
                , "konfirmasi keluar", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
            if (result == DialogResult.Yes)
            {
                Application.Exit();
            }

        }
        private void txtUsia_TextChanged(object sender, EventArgs e)
        {

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void txtJK_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtStatus_TextChanged(object sender, EventArgs e)
        {

        }

        private void button4_Click(object sender, EventArgs e)
        {
            // pastikan ada baris yang dipilih 
            if (dataGridView1.SelectedRows.Count > 0)
            {
                // konfirmasi ke pengguna sebelum menghapus
                DialogResult result = MessageBox.Show("Apakah kamu yakin untuk menghapus data pasien yang kamu pilih?"
                    , "konfirmasi hapus", MessageBoxButtons.YesNo, MessageBoxIcon.Question);
                if (result == DialogResult.Yes)
                {
                    // Hapus baris yang dipilih (baris pertama yang disorot)
                    foreach (DataGridViewRow row in dataGridView1.SelectedRows)
                    {
                        if (!row.IsNewRow)
                        {
                            dataGridView1.Rows.Remove(row);
                        }
                    }

                    MessageBox.Show("Data pasien berhasil dihapus.", "Informasi", MessageBoxButtons.OK,
                        MessageBoxIcon.Information);
                }
                else
                {
                    MessageBox.Show("Pilih terlebih dahulu data pasien yang ingin dihapus!", "peringatan",
                        MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }

                if (dataGridView1.Rows.Count > 0)
                {
                    DialogResult reultoi = MessageBox.Show("Apakah kamu yakin ingin menghapus semua data pasien?",
                        "konfirmasi hapus semua",
                        MessageBoxButtons.YesNo, MessageBoxIcon.Warning);
                    if (reultoi == DialogResult.Yes)
                    {
                        dataGridView1.Rows.Clear();

                        MessageBox.Show("Semua data pasien telah dihapus.", "informasi", MessageBoxButtons.OK
                            , MessageBoxIcon.Information);
                    }
                }
                else
                {
                    // jika memilih no
                    MessageBox.Show("PENGHAPUSAN DIBATALKAN.", "dibatalkan", MessageBoxButtons.OK,
                        MessageBoxIcon.Information);
                }


            }
        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            // Ambil teks dari textbox nama 
            string namaCari = txtNama.Text.Trim();

            // Pastikan inputtidak kosong
            if (string.IsNullOrEmpty(namaCari))
            {
                MessageBox.Show("Masukkan nama pasien yang ingin dicari!", "peringatan", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }
            // Tandai apakah data di temukan 
            bool ditemukan = false;

            // loop setiap baris di DataGridView
            foreach (DataGridViewRow row in dataGridView1.Rows)
            {
                if (row.IsNewRow) continue;

                // cek kolom pertama (nama pasien)
                string namaPasien = row.Cells[0].Value?.ToString() ?? "";

                if (namaPasien.Equals(namaCari, StringComparison.OrdinalIgnoreCase))
                {
                    row.Selected = true;
                    dataGridView1.CurrentCell = row.Cells[0];
                    MessageBox.Show($"Data pasien '{namaCari}' ditemukan!", "Informasi", MessageBoxButtons.OK
                        , MessageBoxIcon.Information);
                    ditemukan = true;
                    break;
                }

                // jika tidak ditemukan
                if (!ditemukan)
                {
                    MessageBox.Show($"data pasien '{namaCari}' tidak ditemukan.", "hasil pencarian", MessageBoxButtons.OK,
                        MessageBoxIcon.Information);
                }
            }

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (cmbObat.Text == "Paracetamol")
            {
                txtHarga.Text = "15000"; // Rp.15.000
            }
            else if (cmbObat.Text == "Amlodipin")
            {
                txtHarga.Text = "20000"; // Rp.20.000
            }
            else if (cmbObat.Text == "Simvastatin")
            {
                txtHarga.Text = "45000"; // Rp.45.000
            }
            else if (cmbObat.Text == "flunarizine")
            {
                txtHarga.Text = "80000"; // Rp.80.000
            }
            else if (cmbObat.Text == "Amoxilin")
            {
                txtHarga.Text = "30000"; // Rp.30.000
            }


        }

        private void label7_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void btnByr_Click(object sender, EventArgs e)
        {
            // Jika user sudah bertansaksi maka akan muncul peringatan

            int total = Convert.ToInt32(txtTotal.Text);
            int bayar = Convert.ToInt32(txtbayar.Text);

            if (total > bayar)
            {
                MessageBox.Show("uang anda kurang!");
                return;
            }

            else
            {
                MessageBox.Show("Transaksi anda berhasil");
            }

            double kembalian = bayar - total;
            txtKembali.Text = kembalian.ToString();


        }

        private void label6_Click(object sender, EventArgs e)
        {

        }

        private void txtJumlah_TextChanged(object sender, EventArgs e)
        {
            // jika user mengisi menggunakan huruf maka program akan memperingatkan 
            if (txtHarga.Text != "" && txtJumlah.Text != "")
            {
                if (int.TryParse(txtJumlah.Text, out int jumlah))
                {
                    int harga = int.Parse(txtHarga.Text);
                    int total = harga * jumlah;
                    txtTotal.Text = $"{total}";
                }
                else
                {
                    MessageBox.Show("Di isi pakai angka ya!");
                }
            }
        }

        private void textBox2_TextChanged_1(object sender, EventArgs e)
        {

        }

        private void txtTotal_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtHarga_TextChanged(object sender, EventArgs e)
        {

        }

        private void txtKembali_TextChanged(object sender, EventArgs e)
        {

        }
    }
}
