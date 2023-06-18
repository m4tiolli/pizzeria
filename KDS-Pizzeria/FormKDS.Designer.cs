namespace KDS_Pizzeria
{
    partial class FormKDS
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
			this.components = new System.ComponentModel.Container();
			System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(FormKDS));
			this.timerKDS = new System.Windows.Forms.Timer(this.components);
			this.panelKDS = new System.Windows.Forms.FlowLayoutPanel();
			this.SuspendLayout();
			// 
			// timerKDS
			// 
			this.timerKDS.Tick += new System.EventHandler(this.TimerKDS_Tick);
			// 
			// panelKDS
			// 
			this.panelKDS.Dock = System.Windows.Forms.DockStyle.Fill;
			this.panelKDS.Location = new System.Drawing.Point(0, 0);
			this.panelKDS.Name = "panelKDS";
			this.panelKDS.Size = new System.Drawing.Size(800, 450);
			this.panelKDS.TabIndex = 0;
			// 
			// FormKDS
			// 
			this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
			this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
			this.ClientSize = new System.Drawing.Size(800, 450);
			this.Controls.Add(this.panelKDS);
			this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.SizableToolWindow;
			this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
			this.Name = "FormKDS";
			this.Text = "FormKDS";
			this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
			this.Load += new System.EventHandler(this.FormKDS_Load);
			this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Timer timerKDS;
        private System.Windows.Forms.FlowLayoutPanel panelKDS;
    }
}