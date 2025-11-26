namespace projek_akhir_yulmenina
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            groupBox1 = new GroupBox();
            txtStatus = new TextBox();
            button1 = new Button();
            button3 = new Button();
            button2 = new Button();
            txtJK = new TextBox();
            txtUsia = new TextBox();
            txtNama = new TextBox();
            label5 = new Label();
            label4 = new Label();
            label3 = new Label();
            label2 = new Label();
            label1 = new Label();
            button5 = new Button();
            dataGridView1 = new DataGridView();
            Nama = new DataGridViewTextBoxColumn();
            Age = new DataGridViewTextBoxColumn();
            JK = new DataGridViewTextBoxColumn();
            Status = new DataGridViewTextBoxColumn();
            button4 = new Button();
            cmbObat = new ComboBox();
            lblEnam = new Label();
            txtJml = new Label();
            label8 = new Label();
            txtTotal = new TextBox();
            btnByr = new Button();
            button7 = new Button();
            txtKmbaly = new Label();
            txtbayar = new TextBox();
            txtKembali = new TextBox();
            btntotal = new TextBox();
            txtbt = new Label();
            label6 = new Label();
            txtHarga = new TextBox();
            txtJumlah = new TextBox();
            groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).BeginInit();
            SuspendLayout();
            // 
            // groupBox1
            // 
            groupBox1.BackColor = Color.Transparent;
            groupBox1.Controls.Add(txtStatus);
            groupBox1.Controls.Add(button1);
            groupBox1.Controls.Add(button3);
            groupBox1.Controls.Add(button2);
            groupBox1.Controls.Add(txtJK);
            groupBox1.Controls.Add(txtUsia);
            groupBox1.Controls.Add(txtNama);
            groupBox1.Controls.Add(label5);
            groupBox1.Controls.Add(label4);
            groupBox1.Controls.Add(label3);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(label1);
            groupBox1.Location = new Point(42, 111);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(422, 284);
            groupBox1.TabIndex = 0;
            groupBox1.TabStop = false;
            groupBox1.Enter += groupBox1_Enter;
            // 
            // txtStatus
            // 
            txtStatus.Location = new Point(139, 185);
            txtStatus.Name = "txtStatus";
            txtStatus.Size = new Size(277, 27);
            txtStatus.TabIndex = 13;
            // 
            // button1
            // 
            button1.BackColor = Color.DeepSkyBlue;
            button1.Font = new Font("Impact", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            button1.ForeColor = SystemColors.ButtonHighlight;
            button1.Location = new Point(67, 227);
            button1.Name = "button1";
            button1.Size = new Size(94, 29);
            button1.TabIndex = 12;
            button1.Text = "Cari";
            button1.UseVisualStyleBackColor = false;
            button1.Click += button1_Click_1;
            // 
            // button3
            // 
            button3.BackColor = Color.DeepSkyBlue;
            button3.Font = new Font("Arial Black", 9F, FontStyle.Bold, GraphicsUnit.Point, 0);
            button3.ForeColor = SystemColors.ButtonHighlight;
            button3.Location = new Point(167, 228);
            button3.Name = "button3";
            button3.Size = new Size(129, 29);
            button3.TabIndex = 11;
            button3.Text = "Tambah data";
            button3.UseVisualStyleBackColor = false;
            button3.Click += button3_Click;
            // 
            // button2
            // 
            button2.BackColor = Color.Red;
            button2.Font = new Font("Arial", 9F, FontStyle.Bold, GraphicsUnit.Point, 0);
            button2.ForeColor = SystemColors.ButtonHighlight;
            button2.Location = new Point(302, 228);
            button2.Name = "button2";
            button2.Size = new Size(94, 29);
            button2.TabIndex = 10;
            button2.Text = "Hapus";
            button2.UseVisualStyleBackColor = false;
            button2.Click += button2_Click;
            // 
            // txtJK
            // 
            txtJK.Location = new Point(135, 140);
            txtJK.Name = "txtJK";
            txtJK.Size = new Size(281, 27);
            txtJK.TabIndex = 7;
            txtJK.TextChanged += txtJK_TextChanged;
            // 
            // txtUsia
            // 
            txtUsia.Location = new Point(135, 95);
            txtUsia.Name = "txtUsia";
            txtUsia.Size = new Size(281, 27);
            txtUsia.TabIndex = 6;
            txtUsia.TextChanged += textBox2_TextChanged;
            // 
            // txtNama
            // 
            txtNama.Location = new Point(135, 57);
            txtNama.Name = "txtNama";
            txtNama.Size = new Size(281, 27);
            txtNama.TabIndex = 5;
            txtNama.TextChanged += txtUsia_TextChanged;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Font = new Font("Arial Narrow", 10.2F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point, 0);
            label5.Location = new Point(16, 185);
            label5.Name = "label5";
            label5.Size = new Size(117, 22);
            label5.TabIndex = 4;
            label5.Text = "Status penyakit";
            label5.Click += label5_Click;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Font = new Font("Arial Narrow", 10.2F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point, 0);
            label4.Location = new Point(16, 100);
            label4.Name = "label4";
            label4.Size = new Size(40, 22);
            label4.TabIndex = 3;
            label4.Text = "Usia";
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Font = new Font("Arial Narrow", 10.2F, FontStyle.Bold | FontStyle.Italic, GraphicsUnit.Point, 0);
            label3.Location = new Point(16, 142);
            label3.Name = "label3";
            label3.Size = new Size(104, 22);
            label3.TabIndex = 2;
            label3.Text = "Jenis kelamin";
            label3.Click += label3_Click;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Font = new Font("Arial Narrow", 10.2F, FontStyle.Bold, GraphicsUnit.Point, 0);
            label2.Location = new Point(16, 62);
            label2.Name = "label2";
            label2.Size = new Size(48, 22);
            label2.TabIndex = 1;
            label2.Text = "Nama";
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Font = new Font("Arial Rounded MT Bold", 13.8F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label1.ForeColor = Color.Black;
            label1.Location = new Point(51, 10);
            label1.Name = "label1";
            label1.Size = new Size(245, 27);
            label1.TabIndex = 0;
            label1.Text = "INPUT DATA PASIEN";
            // 
            // button5
            // 
            button5.BackColor = Color.IndianRed;
            button5.Font = new Font("Impact", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            button5.ForeColor = SystemColors.ButtonHighlight;
            button5.Location = new Point(12, 500);
            button5.Name = "button5";
            button5.Size = new Size(120, 29);
            button5.TabIndex = 2;
            button5.Text = "Keluar";
            button5.UseVisualStyleBackColor = false;
            button5.Click += button5_Click;
            // 
            // dataGridView1
            // 
            dataGridView1.BackgroundColor = Color.AliceBlue;
            dataGridView1.ColumnHeadersHeightSizeMode = DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            dataGridView1.Columns.AddRange(new DataGridViewColumn[] { Nama, Age, JK, Status });
            dataGridView1.Location = new Point(518, 106);
            dataGridView1.Name = "dataGridView1";
            dataGridView1.RowHeadersWidth = 51;
            dataGridView1.Size = new Size(507, 212);
            dataGridView1.TabIndex = 5;
            dataGridView1.CellContentClick += dataGridView1_CellContentClick;
            // 
            // Nama
            // 
            Nama.HeaderText = "Nama Pasien";
            Nama.MinimumWidth = 6;
            Nama.Name = "Nama";
            Nama.Width = 125;
            // 
            // Age
            // 
            Age.HeaderText = "Usia";
            Age.MinimumWidth = 6;
            Age.Name = "Age";
            Age.Width = 125;
            // 
            // JK
            // 
            JK.HeaderText = "Jenis Kelamin";
            JK.MinimumWidth = 6;
            JK.Name = "JK";
            JK.Width = 125;
            // 
            // Status
            // 
            Status.HeaderText = "penyakit";
            Status.MinimumWidth = 6;
            Status.Name = "Status";
            Status.Width = 125;
            // 
            // button4
            // 
            button4.BackColor = Color.Red;
            button4.Font = new Font("Impact", 9F, FontStyle.Regular, GraphicsUnit.Point, 0);
            button4.ForeColor = SystemColors.ControlLightLight;
            button4.Location = new Point(965, 331);
            button4.Name = "button4";
            button4.Size = new Size(94, 29);
            button4.TabIndex = 6;
            button4.Text = "Hapus";
            button4.UseVisualStyleBackColor = false;
            button4.Click += button4_Click;
            // 
            // cmbObat
            // 
            cmbObat.FormattingEnabled = true;
            cmbObat.Items.AddRange(new object[] { "Paracetamol", "Amlodipin", "Simvastatin", "flunarizine", "Amuxilin" });
            cmbObat.Location = new Point(577, 354);
            cmbObat.Name = "cmbObat";
            cmbObat.Size = new Size(191, 28);
            cmbObat.TabIndex = 7;
            cmbObat.SelectedIndexChanged += comboBox1_SelectedIndexChanged;
            // 
            // lblEnam
            // 
            lblEnam.AutoSize = true;
            lblEnam.BackColor = Color.Transparent;
            lblEnam.Location = new Point(470, 331);
            lblEnam.Name = "lblEnam";
            lblEnam.Size = new Size(475, 20);
            lblEnam.TabIndex = 8;
            lblEnam.Text = "note: setelah diketahui apa penyakitnya silahkan pilih obat yang sesuai";
            // 
            // txtJml
            // 
            txtJml.AutoSize = true;
            txtJml.Font = new Font("Segoe UI", 10.2F, FontStyle.Regular, GraphicsUnit.Point, 0);
            txtJml.Location = new Point(505, 402);
            txtJml.Name = "txtJml";
            txtJml.Size = new Size(60, 23);
            txtJml.TabIndex = 11;
            txtJml.Text = "Harga:";
            txtJml.Click += label7_Click;
            // 
            // label8
            // 
            label8.AutoSize = true;
            label8.BackColor = SystemColors.ButtonFace;
            label8.Location = new Point(657, 451);
            label8.Name = "label8";
            label8.Size = new Size(0, 20);
            label8.TabIndex = 13;
            // 
            // txtTotal
            // 
            txtTotal.Location = new Point(359, 500);
            txtTotal.Name = "txtTotal";
            txtTotal.Size = new Size(214, 27);
            txtTotal.TabIndex = 14;
            txtTotal.TextChanged += textBox1_TextChanged;
            // 
            // btnByr
            // 
            btnByr.BackColor = SystemColors.GradientInactiveCaption;
            btnByr.ForeColor = SystemColors.InactiveCaptionText;
            btnByr.Location = new Point(617, 461);
            btnByr.Name = "btnByr";
            btnByr.Size = new Size(94, 29);
            btnByr.TabIndex = 15;
            btnByr.Text = "BAYAR";
            btnByr.UseVisualStyleBackColor = false;
            btnByr.Click += btnByr_Click;
            // 
            // button7
            // 
            button7.Location = new Point(430, 431);
            button7.Name = "button7";
            button7.Size = new Size(8, 8);
            button7.TabIndex = 16;
            button7.Text = "button7";
            button7.UseVisualStyleBackColor = true;
            // 
            // txtKmbaly
            // 
            txtKmbaly.AutoSize = true;
            txtKmbaly.Font = new Font("Segoe UI", 10.2F, FontStyle.Regular, GraphicsUnit.Point, 0);
            txtKmbaly.Location = new Point(784, 461);
            txtKmbaly.Name = "txtKmbaly";
            txtKmbaly.Size = new Size(90, 23);
            txtKmbaly.TabIndex = 18;
            txtKmbaly.Text = "Kembalian";
            // 
            // txtbayar
            // 
            txtbayar.Location = new Point(602, 502);
            txtbayar.Name = "txtbayar";
            txtbayar.Size = new Size(125, 27);
            txtbayar.TabIndex = 19;
            txtbayar.TextChanged += textBox2_TextChanged_1;
            // 
            // txtKembali
            // 
            txtKembali.Location = new Point(771, 502);
            txtKembali.Name = "txtKembali";
            txtKembali.Size = new Size(125, 27);
            txtKembali.TabIndex = 20;
            txtKembali.TextChanged += txtKembali_TextChanged;
            // 
            // btntotal
            // 
            btntotal.Location = new Point(416, 467);
            btntotal.Name = "btntotal";
            btntotal.Size = new Size(70, 27);
            btntotal.TabIndex = 21;
            btntotal.Text = "TOTAL:";
            btntotal.TextChanged += txtTotal_TextChanged;
            // 
            // txtbt
            // 
            txtbt.AutoSize = true;
            txtbt.Location = new Point(505, 357);
            txtbt.Name = "txtbt";
            txtbt.Size = new Size(49, 20);
            txtbt.TabIndex = 22;
            txtbt.Text = "OBAT:";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Font = new Font("Segoe UI", 10.2F, FontStyle.Regular, GraphicsUnit.Point, 0);
            label6.Location = new Point(784, 402);
            label6.Name = "label6";
            label6.Size = new Size(64, 23);
            label6.TabIndex = 23;
            label6.Text = "Jumlah";
            label6.Click += label6_Click;
            // 
            // txtHarga
            // 
            txtHarga.Location = new Point(577, 399);
            txtHarga.Name = "txtHarga";
            txtHarga.Size = new Size(125, 27);
            txtHarga.TabIndex = 24;
            txtHarga.TextChanged += txtHarga_TextChanged;
            // 
            // txtJumlah
            // 
            txtJumlah.Location = new Point(862, 398);
            txtJumlah.Name = "txtJumlah";
            txtJumlah.Size = new Size(125, 27);
            txtJumlah.TabIndex = 25;
            txtJumlah.TextChanged += txtJumlah_TextChanged;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            BackgroundImage = (Image)resources.GetObject("$this.BackgroundImage");
            BackgroundImageLayout = ImageLayout.Stretch;
            ClientSize = new Size(1071, 541);
            Controls.Add(txtJumlah);
            Controls.Add(txtHarga);
            Controls.Add(label6);
            Controls.Add(txtbt);
            Controls.Add(btntotal);
            Controls.Add(txtKembali);
            Controls.Add(txtbayar);
            Controls.Add(txtKmbaly);
            Controls.Add(button7);
            Controls.Add(btnByr);
            Controls.Add(txtTotal);
            Controls.Add(label8);
            Controls.Add(txtJml);
            Controls.Add(lblEnam);
            Controls.Add(cmbObat);
            Controls.Add(button4);
            Controls.Add(button5);
            Controls.Add(groupBox1);
            Controls.Add(dataGridView1);
            Name = "Form1";
            Text = "Form1";
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)dataGridView1).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private GroupBox groupBox1;
        private Label label5;
        private Label label4;
        private Label label3;
        private Label label2;
        private Label label1;
        private TextBox txtJK;
        private TextBox txtUsia;
        private TextBox txtNama;
        private Button button3;
        private Button button2;
        private Button button5;
        private DataGridView dataGridView1;
        private Button button1;
        private Button button4;
        private DataGridViewTextBoxColumn Nama;
        private DataGridViewTextBoxColumn Age;
        private DataGridViewTextBoxColumn JK;
        private DataGridViewTextBoxColumn Status;
        private ComboBox cmbObat;
        private Label lblEnam;
        private Label txtJml;
        private Label label8;
        private TextBox txtTotal;
        private Button btnByr;
        private Button button7;
        private TextBox txtStatus;
        private Label txtKmbaly;
        private TextBox txtbayar;
        private TextBox txtKembali;
        private TextBox btntotal;
        private Label txtbt;
        private Label label6;
        private TextBox txtHarga;
        private TextBox txtJumlah;
    }
}
