-- Create system_devices table
CREATE TABLE IF NOT EXISTS public.system_devices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id BIGINT NOT NULL,
  device_name TEXT NOT NULL,
  device_uuid TEXT UNIQUE NOT NULL,
  user_id UUID,
  os_type TEXT NOT NULL, -- 'Windows', 'Linux', 'macOS'
  os_version TEXT,
  os_build TEXT,
  last_seen TIMESTAMPTZ,
  last_update_scan TIMESTAMPTZ,
  last_update_install TIMESTAMPTZ,
  update_compliance_status TEXT DEFAULT 'unknown', -- 'compliant', 'non_compliant', 'unknown'
  pending_critical_count INTEGER DEFAULT 0,
  pending_total_count INTEGER DEFAULT 0,
  failed_updates_count INTEGER DEFAULT 0,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_deleted BOOLEAN DEFAULT FALSE
);

-- Create system_pending_updates table
CREATE TABLE IF NOT EXISTS public.system_pending_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id BIGINT NOT NULL,
  device_id UUID NOT NULL REFERENCES public.system_devices(id),
  kb_number TEXT NOT NULL,
  title TEXT NOT NULL,
  classification TEXT, -- 'Critical', 'Important', 'Moderate', 'Low', 'Security'
  severity TEXT,
  release_date DATE,
  restart_required BOOLEAN DEFAULT FALSE,
  download_size_mb NUMERIC,
  detected_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_deleted BOOLEAN DEFAULT FALSE
);

-- Create system_installed_updates table
CREATE TABLE IF NOT EXISTS public.system_installed_updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id BIGINT NOT NULL,
  device_id UUID NOT NULL REFERENCES public.system_devices(id),
  kb_number TEXT NOT NULL,
  title TEXT NOT NULL,
  install_date TIMESTAMPTZ NOT NULL,
  status TEXT DEFAULT 'installed', -- 'installed', 'failed', 'pending_reboot'
  install_method TEXT, -- 'automatic', 'manual', 'wsus', 'rmm'
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create system_update_history table
CREATE TABLE IF NOT EXISTS public.system_update_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id BIGINT NOT NULL,
  device_id UUID NOT NULL REFERENCES public.system_devices(id),
  kb_number TEXT NOT NULL,
  status TEXT NOT NULL, -- 'success', 'failed', 'pending', 'downloading'
  error_code TEXT,
  attempt_number INTEGER DEFAULT 1,
  logs TEXT,
  performed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  is_deleted BOOLEAN DEFAULT FALSE
);

-- Create system_update_alerts table
CREATE TABLE IF NOT EXISTS public.system_update_alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id BIGINT NOT NULL,
  device_id UUID REFERENCES public.system_devices(id),
  alert_type TEXT NOT NULL, -- 'failed_update', 'device_offline', 'missing_critical', 'compliance_breach'
  severity TEXT NOT NULL, -- 'critical', 'high', 'medium', 'low'
  message TEXT NOT NULL,
  resolved BOOLEAN DEFAULT FALSE,
  resolved_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create system_update_ingest_logs table
CREATE TABLE IF NOT EXISTS public.system_update_ingest_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id BIGINT NOT NULL,
  device_id UUID REFERENCES public.system_devices(id),
  payload JSONB NOT NULL,
  ingested_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.system_devices ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_pending_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_installed_updates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_update_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_update_alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_update_ingest_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies for system_devices
CREATE POLICY "tenant_select_system_devices" ON public.system_devices
  FOR SELECT USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_insert_system_devices" ON public.system_devices
  FOR INSERT WITH CHECK (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_update_system_devices" ON public.system_devices
  FOR UPDATE USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_delete_system_devices" ON public.system_devices
  FOR DELETE USING (FALSE);

-- RLS Policies for system_pending_updates
CREATE POLICY "tenant_select_system_pending_updates" ON public.system_pending_updates
  FOR SELECT USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_insert_system_pending_updates" ON public.system_pending_updates
  FOR INSERT WITH CHECK (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_update_system_pending_updates" ON public.system_pending_updates
  FOR UPDATE USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_delete_system_pending_updates" ON public.system_pending_updates
  FOR DELETE USING (FALSE);

-- RLS Policies for system_installed_updates
CREATE POLICY "tenant_select_system_installed_updates" ON public.system_installed_updates
  FOR SELECT USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_insert_system_installed_updates" ON public.system_installed_updates
  FOR INSERT WITH CHECK (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_update_system_installed_updates" ON public.system_installed_updates
  FOR UPDATE USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_delete_system_installed_updates" ON public.system_installed_updates
  FOR DELETE USING (FALSE);

-- RLS Policies for system_update_history
CREATE POLICY "tenant_select_system_update_history" ON public.system_update_history
  FOR SELECT USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_insert_system_update_history" ON public.system_update_history
  FOR INSERT WITH CHECK (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_update_system_update_history" ON public.system_update_history
  FOR UPDATE USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_delete_system_update_history" ON public.system_update_history
  FOR DELETE USING (FALSE);

-- RLS Policies for system_update_alerts
CREATE POLICY "tenant_select_system_update_alerts" ON public.system_update_alerts
  FOR SELECT USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_insert_system_update_alerts" ON public.system_update_alerts
  FOR INSERT WITH CHECK (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_update_system_update_alerts" ON public.system_update_alerts
  FOR UPDATE USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_delete_system_update_alerts" ON public.system_update_alerts
  FOR DELETE USING (FALSE);

-- RLS Policies for system_update_ingest_logs
CREATE POLICY "tenant_select_system_update_ingest_logs" ON public.system_update_ingest_logs
  FOR SELECT USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_insert_system_update_ingest_logs" ON public.system_update_ingest_logs
  FOR INSERT WITH CHECK (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_update_system_update_ingest_logs" ON public.system_update_ingest_logs
  FOR UPDATE USING (tenant_id = (auth.jwt() ->> 'tenant_id')::BIGINT);

CREATE POLICY "tenant_delete_system_update_ingest_logs" ON public.system_update_ingest_logs
  FOR DELETE USING (FALSE);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_system_devices_tenant ON public.system_devices(tenant_id);
CREATE INDEX IF NOT EXISTS idx_system_devices_uuid ON public.system_devices(device_uuid);
CREATE INDEX IF NOT EXISTS idx_system_devices_compliance ON public.system_devices(update_compliance_status);
CREATE INDEX IF NOT EXISTS idx_system_pending_updates_tenant ON public.system_pending_updates(tenant_id);
CREATE INDEX IF NOT EXISTS idx_system_pending_updates_device ON public.system_pending_updates(device_id);
CREATE INDEX IF NOT EXISTS idx_system_pending_updates_kb ON public.system_pending_updates(kb_number);
CREATE INDEX IF NOT EXISTS idx_system_installed_updates_tenant ON public.system_installed_updates(tenant_id);
CREATE INDEX IF NOT EXISTS idx_system_installed_updates_device ON public.system_installed_updates(device_id);
CREATE INDEX IF NOT EXISTS idx_system_update_history_tenant ON public.system_update_history(tenant_id);
CREATE INDEX IF NOT EXISTS idx_system_update_history_device ON public.system_update_history(device_id);
CREATE INDEX IF NOT EXISTS idx_system_update_alerts_tenant ON public.system_update_alerts(tenant_id);
CREATE INDEX IF NOT EXISTS idx_system_update_alerts_resolved ON public.system_update_alerts(resolved);
CREATE INDEX IF NOT EXISTS idx_system_update_ingest_logs_tenant ON public.system_update_ingest_logs(tenant_id);

-- Trigger for updated_at on system_devices
CREATE OR REPLACE FUNCTION update_system_devices_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER system_devices_updated_at
  BEFORE UPDATE ON public.system_devices
  FOR EACH ROW
  EXECUTE FUNCTION update_system_devices_updated_at();