namespace KDS_Pizzeria
{
    partial class FormTeste
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
            this.PanelLinhaPedido = new System.Windows.Forms.Panel();
            this.lblItemPedido = new System.Windows.Forms.Label();
            this.lblQTDProduto = new System.Windows.Forms.Label();
            this.PanelLinhaPedido.SuspendLayout();
            this.SuspendLayout();
            // 
            // PanelLinhaPedido
            // 
            this.PanelLinhaPedido.BackColor = System.Drawing.SystemColors.ActiveCaption;
            this.PanelLinhaPedido.Controls.Add(this.lblItemPedido);
            this.PanelLinhaPedido.Controls.Add(this.lblQTDProduto);
            this.PanelLinhaPedido.Location = new System.Drawing.Point(115, 66);
            this.PanelLinhaPedido.Name = "PanelLinhaPedido";
            this.PanelLinhaPedido.Size = new System.Drawing.Size(186, 131);
            this.PanelLinhaPedido.TabIndex = 0;
            // 
            // lblItemPedido
            // 
            this.lblItemPedido.AutoSize = true;
            this.lblItemPedido.Dock = System.Windows.Forms.DockStyle.Right;
            this.lblItemPedido.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblItemPedido.Location = new System.Drawing.Point(92, 0);
            this.lblItemPedido.Name = "lblItemPedido";
            this.lblItemPedido.Size = new System.Drawing.Size(94, 24);
            this.lblItemPedido.TabIndex = 2;
            this.lblItemPedido.Text = "Coca cola";
            this.lblItemPedido.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            // 
            // lblQTDProduto
            // 
            this.lblQTDProduto.Dock = System.Windows.Forms.DockStyle.Left;
            this.lblQTDProduto.Font = new System.Drawing.Font("Microsoft Sans Serif", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblQTDProduto.Location = new System.Drawing.Point(0, 0);
            this.lblQTDProduto.Name = "lblQTDProduto";
            this.lblQTDProduto.Size = new System.Drawing.Size(77, 131);
            this.lblQTDProduto.TabIndex = 1;
            this.lblQTDProduto.Text = "2 x ";
            this.lblQTDProduto.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            // 
            // FormTeste
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.PanelLinhaPedido);
            this.Name = "FormTeste";
            this.Text = "FormTeste";
            this.PanelLinhaPedido.ResumeLayout(false);
            this.PanelLinhaPedido.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel PanelLinhaPedido;
        private System.Windows.Forms.Label lblQTDProduto;
        private System.Windows.Forms.Label lblItemPedido;
    }
}