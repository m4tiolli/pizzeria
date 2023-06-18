using KDS_Pizzeria.DTO;
using System;
using System.Diagnostics;
using System.Drawing;
using System.Windows.Forms;

namespace KDS_Pizzeria.Componentes
{
    public static class ComponentesKDS
    {
        private static void BordaPedido(object sender, System.Windows.Forms.PaintEventArgs e)
        {
            int thickness = 3;
            int halfThickness = thickness / 2;
            using (Pen p = new Pen(ColorTranslator.FromHtml("#698C3D"), thickness))
            {
                e.Graphics.DrawRectangle(p, new Rectangle(halfThickness,
                                                          halfThickness,
                                                          260 - thickness,
                                                          294 - thickness));
            }
        }

        private static void LinhaPedido(object sender, System.Windows.Forms.PaintEventArgs e)
        {
            Pen pen = new Pen(Color.FromArgb(255, 0, 0, 0));
            e.Graphics.DrawLine(pen, 3, 50, 257, 50);
        }

        public static Panel CriarPedido(PedidoDTO pedido)
        {
            var pedidoPanel = new System.Windows.Forms.Panel();
            pedidoPanel.BackColor = System.Drawing.Color.White;
            //pedidoPanel.BorderStyle = System.Windows.Forms.BorderStyle.FixedSingle;
            pedidoPanel.Name = $"PanelPedido{pedido.ID}";
            pedidoPanel.Size = new System.Drawing.Size(260, 294);
            pedidoPanel.TabIndex = 0;
            pedidoPanel.Paint += BordaPedido;

            var header = CriarHeader(pedido.ID);
            var produtos = CriarProdutosPedido(pedido);
            //var footer = CriarFooter(DateTime.Now);

            pedidoPanel.Controls.Add(produtos);
            pedidoPanel.Controls.Add(header);
            //pedidoPanel.Controls.Add(footer);

            return pedidoPanel;
        }
        #region Header
        private static Panel CriarHeader(int idPedido)
        {
            var header = new Panel();
            header.BackColor = System.Drawing.Color.Transparent;
            header.Dock = System.Windows.Forms.DockStyle.Top;
            header.Size = new System.Drawing.Size(260, 53);
            header.Paint += LinhaPedido;
            header.Location = new Point(0, 0);
            header.Name = "Header";

            var labelID = CriarLabelNumeroPedido(idPedido);
            var labelTimer = CriarLabelTimerPedido(idPedido);

            var stopwatch = new Stopwatch();
            var timer = new System.Windows.Forms.Timer();
            timer.Interval = 1000;
            timer.Tag = idPedido;

            stopwatch.Start();
            timer.Tick += new EventHandler((s, e) => TimerEvent(s, e, labelTimer, stopwatch));
            timer.Start();

            header.Controls.Add(labelTimer);
            header.Controls.Add(labelID);

            return header;
        }
        private static Label CriarLabelNumeroPedido(int idPedido)
        {
            var lblNPedido = new Label();
            lblNPedido.Dock = System.Windows.Forms.DockStyle.Left;
            lblNPedido.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            lblNPedido.Location = new System.Drawing.Point(0, 0);
            lblNPedido.Name = "lblNPedido";
            lblNPedido.Size = new System.Drawing.Size(106, 46);
            lblNPedido.TabIndex = 0;
            lblNPedido.Text = "N° " + idPedido;
            lblNPedido.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            lblNPedido.ForeColor = ColorTranslator.FromHtml("#8E1C1A");

            return lblNPedido;
        }
        private static Label CriarLabelTimerPedido(int idPedido)
        {
            var lblTimer = new Label();
            lblTimer.Dock = System.Windows.Forms.DockStyle.Right;
            lblTimer.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            lblTimer.Location = new System.Drawing.Point(96, 0);
            lblTimer.Name = "timer" + idPedido;
            lblTimer.Size = new System.Drawing.Size(152, 46);
            lblTimer.TabIndex = 1;
            lblTimer.Text = "00:00:15";
            lblTimer.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;
            lblTimer.ForeColor = ColorTranslator.FromHtml("#8E1C1A");

            return lblTimer;
        }

        private static void TimerEvent(object sender, EventArgs e, Label label, Stopwatch stopwatch)
        {
            var test = new DateTime(stopwatch.ElapsedTicks);
            label.Text = test.ToString("HH:mm:ss");
        }

        #endregion
        #region ItensProduto
        private static Panel CriarProdutosPedido(PedidoDTO pedido)
        {
            var panelItensPedido = new Panel();
            panelItensPedido.Dock = System.Windows.Forms.DockStyle.Fill;
            panelItensPedido.Location = new System.Drawing.Point(0, 48);
            panelItensPedido.Name = "PanelItensPedido";
            panelItensPedido.Size = new System.Drawing.Size(250, 218);
            panelItensPedido.BackColor = System.Drawing.Color.Transparent;

            foreach (var itemPedido in pedido.Itens)
            {
                var componenteItemPedido = CriarItemPedido(itemPedido);
                if (string.IsNullOrWhiteSpace(itemPedido.Observacao) == false)
                {
                    var componenteObservacao = CriarObservacao(itemPedido.Observacao);
                    panelItensPedido.Controls.Add(componenteObservacao);
                }
                panelItensPedido.Controls.Add(componenteItemPedido);
            }

            return panelItensPedido;
        }
        private static Panel CriarItemPedido(ItemPedidoDTO itemPedido)
        {
            var panelLinhaPedido = new Panel();
            panelLinhaPedido.Dock = System.Windows.Forms.DockStyle.Top;
            panelLinhaPedido.Location = new System.Drawing.Point(0, 0);
            panelLinhaPedido.Name = "PanelLinhaPedido";
            panelLinhaPedido.Size = new System.Drawing.Size(250, 43);

            var lblQTD = CriarLabelQuantidadeItemPedido(itemPedido.Quantidade);
            var lblItemPedido = CriarLabelItemPedido(itemPedido.Nome);

            panelLinhaPedido.Controls.Add(lblItemPedido);
            panelLinhaPedido.Controls.Add(lblQTD);

            return panelLinhaPedido;
        }

        private static Label CriarLabelQuantidadeItemPedido(int quantidade)
        {
            var lblQTDItem = new Label();
            lblQTDItem.Dock = System.Windows.Forms.DockStyle.Left;
            lblQTDItem.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            lblQTDItem.Location = new System.Drawing.Point(0, 0);
            lblQTDItem.Name = "lblQTDProduto";
            lblQTDItem.Size = new System.Drawing.Size(50, 41);
            lblQTDItem.TabIndex = 0;
            lblQTDItem.Text = quantidade + " x ";
            lblQTDItem.TextAlign = System.Drawing.ContentAlignment.MiddleCenter;

            return lblQTDItem;
        }
        private static Label CriarLabelItemPedido(string itemPedido)
        {
            var lblItemPedido = new Label();
            lblItemPedido.Dock = System.Windows.Forms.DockStyle.Right;
            lblItemPedido.Font = new System.Drawing.Font("Segoe UI", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            lblItemPedido.Location = new System.Drawing.Point(41, 0);
            lblItemPedido.Name = "lblItemPedido";
            lblItemPedido.Size = new System.Drawing.Size(207, 41);
            lblItemPedido.TabIndex = 1;
            lblItemPedido.Text = itemPedido;
            lblItemPedido.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;

            return lblItemPedido;
        }

        private static Panel CriarObservacao(string observacao)
        {
            var panelLinhaObservacao = new Panel();
            panelLinhaObservacao.Dock = System.Windows.Forms.DockStyle.Top;
            panelLinhaObservacao.Location = new System.Drawing.Point(0, 0);
            panelLinhaObservacao.Name = "PanelLinhaObservacao";
            panelLinhaObservacao.Size = new System.Drawing.Size(250, 20);

            var lblObservacao = CriarLabelObservacao(observacao);

            panelLinhaObservacao.Controls.Add(lblObservacao);

            return panelLinhaObservacao;
        }

        private static Label CriarLabelObservacao(string observacao)
        {
            var lblObservacao = new Label();
            lblObservacao.Dock = System.Windows.Forms.DockStyle.Right;
            lblObservacao.Font = new System.Drawing.Font("Segoe UI", 12.25F, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point);
            lblObservacao.Location = new System.Drawing.Point(41, 0);
            lblObservacao.Name = "lblObservacao";
            lblObservacao.Size = new System.Drawing.Size(207, 41);
            lblObservacao.TabIndex = 1;
            lblObservacao.Text = observacao;
            lblObservacao.TextAlign = System.Drawing.ContentAlignment.MiddleLeft;
            lblObservacao.ForeColor = ColorTranslator.FromHtml("#8E1C1A");

            return lblObservacao;
        }
        #endregion  
        #region Footer
        private static Panel CriarFooter(DateTime dataPedido)
        {
            var panelFooter = new Panel();
            panelFooter.Dock = System.Windows.Forms.DockStyle.Bottom;
            panelFooter.Font = new System.Drawing.Font("Segoe UI", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            panelFooter.Location = new System.Drawing.Point(0, 189);
            panelFooter.Name = "Footer";
            panelFooter.Size = new System.Drawing.Size(250, 27);

            var label = CriarLabelFooter(dataPedido.ToString("HH:mm"));
            panelFooter.Controls.Add(label);

            return panelFooter;
        }

        private static Label CriarLabelFooter(string data)
        {
            var lblItemPedido = new Label();
            lblItemPedido.Dock = System.Windows.Forms.DockStyle.Right;
            lblItemPedido.Location = new System.Drawing.Point(150, 0);
            lblItemPedido.Name = "label1";
            lblItemPedido.Size = new System.Drawing.Size(100, 27);
            lblItemPedido.TabIndex = 0;
            lblItemPedido.Text = data;
            lblItemPedido.TextAlign = System.Drawing.ContentAlignment.BottomRight;

            return lblItemPedido;
        }

        #endregion

    }
}
